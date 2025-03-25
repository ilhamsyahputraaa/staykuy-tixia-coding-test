import React from "react";
import HotelItem from "./HotelItem";
import { Hotel } from "@/lib/type";

interface SearchResultsMapProps {
  hotels: Hotel[];
}

export default function SearchResultsMap({ hotels }: SearchResultsMapProps) {
  return (
    <div>
      <div className="text-neutral-800 text-xl flex items-center justify-start">
        Hasil Pencarian{" "}
        <span className="text-sm text-gray-500">({hotels.length} Results)</span>
      </div>

      {hotels.length > 0 ? (
        <div>
          {hotels.map((hotel) => (
            <HotelItem
              key={hotel.id}
              title={hotel.name}
              description={hotel.description}
              images={hotel.images}
              facility={hotel.facilities}
            />
          ))}
        </div>
      ) : (
        <p>No hotels found.</p>
      )}
    </div>
  );
}
