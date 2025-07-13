import DynamicHeading from "@/components/dynamic-heading";
// import roomsData from "@/data/rooms.json";
import getSingleRoom from "@/app/actions/getSingleRoom";
import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import BookingForm from "./booking-form";

interface ParamsTypes {
  id: string;
}

export default async function RoomDetailPage({
  params,
}: {
  params: ParamsTypes;
}) {
  const { id } = params;

  const roomInfo = await getSingleRoom(id);

  if (!roomInfo) {
    return <DynamicHeading title="Room Not Found" />;
  }

  return (
    <>
      <DynamicHeading title={roomInfo.name} />
      <div className="bg-white shadow rounded-lg p-6">
        <Link
          href="/"
          className="flex items-center text-gray-600 hover:text-gray-800 mb-4"
        >
          <FaArrowLeft className="inline mr-1" />
          <span className="ml-2">Back to Rooms</span>
        </Link>

        <div className="flex flex-col sm:flex-row sm:space-x-6">
          <Image
            src={`/images/rooms/${roomInfo.image}`}
            alt={roomInfo.name}
            className="w-full sm:w-1/3 h-64 object-cover rounded-lg"
            width={400}
            height={400}
          />

          <div className="mt-4 sm:mt-0 sm:flex-1">
            <p className="text-gray-600 mb-4">{roomInfo.description}</p>

            <ul className="space-y-2">
              <li>
                <span className="font-semibold text-gray-800">Size: </span>
                {roomInfo.sqft}
                sq ft
              </li>
              <li>
                <span className="font-semibold text-gray-800">
                  Availability:
                </span>
                {roomInfo.availability}
              </li>
              <li>
                <span className="font-semibold text-gray-800">Price: </span>$
                {roomInfo.price_per_hour}/hour
              </li>
              <li>
                <span className="font-semibold text-gray-800">Address: </span>{" "}
                {roomInfo.address}
              </li>
            </ul>
          </div>
        </div>
        <BookingForm />
      </div>
    </>
  );
}
