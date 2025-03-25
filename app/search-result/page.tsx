import SearchComp from "@/components/home/SearchComp";
import LeftSideBar from "@/components/search-result/LeftSideBar";
import SearchResultsMap from "@/components/search-result/SearchResultsMap";
import { HotelSearchResponse } from "@/lib/type";
import React from "react";

interface SearchResultsProps {
  searchParams: Record<string, string | string[] | undefined>;
}

export default async function SearchResult({
  searchParams,
}: SearchResultsProps) {
  try {
    const queryParams = new URLSearchParams();

    Object.entries(searchParams).forEach(([key, value]) => {
      if (value) queryParams.append(key, value as string);
    });

    // Fetch data dari proxy API Next.js
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/hotels?${queryParams}`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch hotels");
    }

    const res: HotelSearchResponse = await response.json();
    const hotels = res.data?.data || []; // Pastikan `hotels` tidak undefined

    return (
      <div className="px-[120px] py-[64px]">
        <SearchComp />
        <div className="flex gap-5 mt-5">
          <div className="border rounded-xl w-1/3 shadow-xl h-screen">
            <LeftSideBar />
          </div>
          <div className="border rounded-xl w-2/3 shadow-xl h-screen">
            <SearchResultsMap hotels={hotels} />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching hotels:", error);
    return <p>Error fetching hotels</p>;
  }
}
