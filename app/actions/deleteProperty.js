"use server";
import cloudinary from "@/config/cloudinary";
import connectToDb from "@/config/databaseconnect";
import Property from "@/models/Property";
import { getSessionUser } from "../utils/getsessionUser";
import { revalidatePath } from "next/cache";

async function deleteProperty(propertyId) {
  await connectToDb();
  const sessionUser = await getSessionUser();
  console.log("Session User:", sessionUser);
  if (!sessionUser || !sessionUser.userId) {
    throw new Error(`User id is required`);
  }

  const { userId } = sessionUser;

  console.log("User ID:", userId);

  const property = await Property.findById(propertyId).populate("owner");
  console.log("Property Owner:", property.owner.toString());

  if (!property) {
    throw new Error(`Property Not Found`);
  }
  //Verify property ownership
  // if (property.owner.toString() !== userId) {
  //   console.error("Unauthorized access: IDs do not match");
  //   throw new Error("Unauthorized to delete property");
  // }
  //Delete the images from cloudinary
  const publicIds = property.images.map((imageUrl) => {
    const parts = imageUrl.split("/");
    return parts.at(-1).split(".").at(0);
  });
  if (publicIds.length > 0) {
    for (let publicId of publicIds) {
      await cloudinary.uploader.destroy("Rent-space/" + publicId);
    }
  }
  await property.deleteOne();

  revalidatePath("/", "layout");
}

export default deleteProperty;
