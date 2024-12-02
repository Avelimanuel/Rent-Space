"use server";
import connectToDb from "@/config/databaseconnect";
import Message from "@/models/Message";
import { getSessionUser } from "../utils/getsessionUser";

async function sendMessage(formData) {
  await connectToDb();
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User id is required");
  }

  const { userId } = sessionUser;

  const recipient = formData.get("recipient");
  if (userId === recipient) {
    return { error: "You can not send message to yourself" };
  }
  const newMessage = new Message({
    sender: userId,
    recipient: recipient,
    property: formData.get("property"),
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  });

  await newMessage.save();
  return { submitted: true };
}

export default sendMessage;
