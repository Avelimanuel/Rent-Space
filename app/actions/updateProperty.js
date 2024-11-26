"use server";
import connectToDb from "@/config/databaseconnect";
import Property from "@/models/Property";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getSessionUser } from "../utils/getsessionUser";


async function updateProperty(propertyId, formData) {
  await connectToDb();
  const sessionUser = await getSessionUser();
  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User id is required");
  }

  const { userId } = sessionUser;
  const amenities = formData.getAll("amenities");

  //Check if the property exists
  const property = await Property.findById(propertyId);
  if (!property) {
    throw new Error("Property not found");
  }

  //verify the property owner
  
  //update the property
  const propertyData = {
    owner: userId,
    type: formData.get("type"),
    name: formData.get("name"),
    description: formData.get("description"),

    location: {
      street: formData.get("location.street"),
      city: formData.get("location.city"),
      state: formData.get("location.state"),
      zipcode: formData.get("location.zipcode"),
    },
    beds: formData.get("beds"),
    baths: formData.get("baths"),

    size: formData.get("square_feet"),
    amenities,
    rates: {
      nightly: formData.get("rates.nightly"),
      weekly: formData.get("rates.weekly"),
      monthly: formData.get("rates.monthly"),
    },
    seller_info: {
      name: formData.get("seller_info.name"),
      email: formData.get("seller_info.email"),
      phone: formData.get("seller_info.phone"),
    },
  };

  const updatedProperty = await Property.findByIdAndUpdate(
    propertyId,
    propertyData
  );
  revalidatePath('/','layout')
  redirect(`/properties/${updatedProperty._id}`)
}

export default updateProperty;
