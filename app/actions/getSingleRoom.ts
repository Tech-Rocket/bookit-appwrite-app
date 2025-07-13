"use server";
import { createAdminClient } from "@/config/appwrite";
import { redirect } from "next/navigation";

async function getSingleRoom(id: string) {
  try {
    const { databases } = await createAdminClient();
    // Fetch rooms
    const roomData = await databases.getDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE!,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS!,
      id
    );
    return roomData;
  } catch (error) {
    console.log("Failed to get roomData", error);
    redirect("/error");
  }
}

export default getSingleRoom;
