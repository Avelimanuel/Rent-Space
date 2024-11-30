"use server";
import connectToDb from "@/config/databaseconnect";
import User from "@/models/User";
import { revalidatePath } from "next/cache";
import Property from "@/models/Property";

async function checkBookmarkStatus(propertyId) {
  await connectToDb();

  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }

  let isBookmarked = user.bookmarks.includes(propertyId);
  return { isBookmarked };
}

export default checkBookmarkStatus;
