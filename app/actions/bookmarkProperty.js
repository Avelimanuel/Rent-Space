"use server";
import connectToDb from "@/config/databaseconnect";
import User from "@/models/User";
import { revalidatePath } from "next/cache";
import Property from "@/models/Property";
import { getSessionUser } from "../utils/getsessionUser";

async function bookmarkProperty(propertyId) {
  await connectToDb();
  const sessionUser = await getSessionUser();
  if (!sessionUser || sessionUser.userId) {
    throw new Error("Login required");
  }

  const { userId } = sessionUser;
  const user = await User.findById(userId);
   if (!user) {
    throw new Error("User not found");
  }

  let isBookmarked = user.bookmarks.includes(propertyId);

  let message;

  if (isBookmarked) {
    user.bookmarks.pull(propertyId);
    message = "Bookmarked property removed";
    isBookmarked = false;
  }else{
    user.bookmarks.push(propertyId);
    message="Property bookmarked";
    isBookmarked = true;
  }
  await user.save();
  revalidatePath('/properties/saved','page')
  return { message, isBookmarked };
}


export default bookmarkProperty;
