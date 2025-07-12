import roomsData from "@/data/rooms.json";
import RoomCard from "@/components/room-card";
import DynamicHeading from "@/components/dynamic-heading";

export default function Home() {
  const roomsInfo =
    roomsData.length > 0 ? (
      roomsData.map((room) => (
        <RoomCard
          key={room.$id}
          $id={room.$id}
          user_id={room.user_id}
          name={room.name}
          description={room.description}
          sqft={room.sqft}
          capacity={room.capacity}
          location={room.location}
          address={room.address}
          amenities={room.amenities}
          availability={room.availability}
          price_per_hour={room.price_per_hour}
          image={room.image}
        />
      ))
    ) : (
      <p>Rooms is empty</p>
    );
  return (
    <>
      <DynamicHeading title="Available Rooms" />
      {roomsInfo}
    </>
  );
}
