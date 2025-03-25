import React from "react";
import HotelItem from "./HotelItem";
import { Hotel } from "@/lib/type";

interface SearchResultsMapProps {
  hotels: Hotel[];
  date:string;
}

export default function SearchResultsMap({ hotels,date }: SearchResultsMapProps) {
  return (
    <div>
      <div className="text-neutral-800 text-xl flex items-end mb-5 justify-start">
        Hasil Pencarian{" "}
        <span className="text-sm text-gray-300 ms-2">
          {hotels.length} Results
        </span>
      </div>

      {hotels.length > 0 ? (
        <div className="flex flex-col gap-5">
          {hotels.map((hotel) => (
            <div key={hotel.id}>
              
            <HotelItem
            id={hotel.id}
              date={date}
              address={hotel.address}
              star={hotel.star}
              price={hotel.rooms[0].price}
              key={hotel.id}
              title={hotel.name}
              description={hotel.description}
              images={hotel.images}
              facility={hotel.facilities}
            />
            </div>
          ))}
        </div>
      ) : (
        <p>No hotels found.</p>
      )}
    </div>
  );
}
