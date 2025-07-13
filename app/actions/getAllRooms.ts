"use server";
import { createAdminClient } from "@/config/appwrite";
import { redirect } from "next/navigation";

async function getAllRooms() {
  try {
    const { databases } = await createAdminClient();
    // Fetch rooms
    const { documents: roomsData } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE!,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS!
    );
    return roomsData;
  } catch (error) {
    console.log("Failed to get roomsData", error);
    redirect("/error");
  }
}

export default getAllRooms;
