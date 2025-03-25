import SearchComp from "@/components/home/SearchComp";
import LeftSideBar from "@/components/search-result/LeftSideBar";
import SearchResultsMap from "@/components/search-result/SearchResultsMap";
import { HotelSearchResponse } from "@/lib/type";
import React from "react";

interface SearchResultsProps {
  searchParams: Record<string, string | string[] | undefined>;
}

// Fungsi untuk fetch data dari /api/hotels
async function getHotels(
  searchParams: Record<string, string | string[] | undefined>
) {
  // Konversi `searchParams` ke string query
  const queryParams = new URLSearchParams();

  Object.entries(searchParams).forEach(([key, value]) => {
    if (value) queryParams.append(key, decodeURIComponent(value as string));
  });

  console.log("searchParams:", searchParams);
  console.log("queryParams:", queryParams.toString()); // Debugging

  try {
    const res = await fetch(`http://localhost:3000/api/hotels?${queryParams}`, {
      cache: "no-store", // Agar tidak cache lama
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch hotels: ${res.statusText}`);
    }

    const data: HotelSearchResponse = await res.json();
    return data.data?.data || []; // Jika `data.data` undefined, kembalikan array kosong
  } catch (error) {
    console.error("Error fetching hotels:", error);
    return [];
  }
}


interface SearchResultsProps {
  searchParams: Record<string, string | string[] | undefined>;
}

export default async function SearchResult({
  searchParams,
}: SearchResultsProps) {
  const hotels = await getHotels(searchParams); // Fetch data hotel

  console.log("Final Hotels Data:", hotels); // Debugging

 const queryParams = new URLSearchParams();
 Object.entries(searchParams).forEach(([key, value]) => {
   if (typeof value === "string") {
     queryParams.append(key, value);
   } else if (Array.isArray(value)) {
     value.forEach((v) => queryParams.append(key, v));
   }
 });

 const date = queryParams.get("date");
  return (
    <div className="px-[120px] py-[64px]">
      <SearchComp />
      <div className="flex gap-5 mt-5">
        <div className="border rounded-xl w-1/3 shadow-xl h-fit">
          <LeftSideBar />
        </div>
        <div className=" rounded-xl w-2/3 ">
          <SearchResultsMap hotels={hotels} date={date ? date:""} />
        </div>
      </div>
    </div>
  );
}
