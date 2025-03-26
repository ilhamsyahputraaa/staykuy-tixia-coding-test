import SearchComp from "@/components/home/SearchComp";
import { Label } from "@/components/ui/label";
import { HotelSearchResponse } from "@/lib/type";
import { MapPinCheck, Star, User2 } from "lucide-react";
import Image from "next/image";
import React from "react";

interface DetailPagesProps {
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

interface DetailPagesProps {
  searchParams: Record<string, string | string[] | undefined>;
}

export default async function DetailPage({
  searchParams,
}: DetailPagesProps) {
  const params = await searchParams
  const hotels = await getHotels(params); // Fetch data hotel

  const hotelData = hotels[0]
  return (
    <div className="px-[120px] py-[64px]">
      <SearchComp />
      <div className="flex text-3xl font-bold mt-10">
        {hotelData.name}
        <div className="flex">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={18}
              className={
                index < hotelData.star ? "text-yellow-400" : "text-gray-500"
              }
              fill={index < hotelData.star ? "yellow" : "gray"}
            />
          ))}
        </div>
      </div>
      <div className="text-sm text-gray-500 flex gap-1 items-center">
        {" "}
        <MapPinCheck size={13} /> {hotelData.address}
      </div>
      <div className="flex">
        <div className="w-1/2">
          <Image
            src={hotelData.images[0]}
            alt={hotelData.name}
            width={1000}
            height={1000}
            className="rounded-2xl"
          />
        </div>
        <div className="w-1/2 flex-wrap  flex">
          {hotelData.images.slice(1, 5).map((image, index) => (
            <Image
              src={image}
              alt={image}
              width={1000}
              height={1000}
              className="rounded-2xl w-1/2 px-2 pb-2"
              key={hotelData.id}
            />
          ))}
        </div>
      </div>
      <div className="w-full flex gap-10 mt-10">
        <button className="border-b border-blue-400">Tentang Hotel</button>
        <button className="">Fasilitas</button>
        <button className="">Kamar</button>
        <button className="">Review</button>
        <button className="">Lokasi</button>
        <button className="">Kebijakan Hotel</button>
      </div>

      <div className="my-10">{hotelData.description}</div>

      <div>
        <Label className="font-bold text-xl" htmlFor="input">
          Fasilitas Hotel
        </Label>

        <div className="flex-wrap flex gap-2">
          {hotelData.facilities.map((v) => (
            <div className="bg-blue-100 rounded-full text- py-2 px-4 flex items-center justify-center">
              {v}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <Label className="font-bold text-xl" htmlFor="input">
          Tipe dan Harga Kamar
        </Label>

        <div className="flex flex-col gap-2">
          {hotelData.rooms.map((v) => (
            <div className="flex shadow-xl my-2 rounded-xl border" key={v.id}>
              <div className="w-[300px]  flex overflow-hiden">
                <Image
                  width={1000}
                  height={1000}
                  src={v.images[0]}
                  alt={v.name}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="w-3/4 p-5">
                <div className="font-bold">{v.name}</div>
                <div className="flex"></div>
                <div className="flex-wrap flex gap-2">
                  {v.facilities.slice(0, 3).map((v) => (
                    <div key={v} className="bg-blue-100 rounded-full text-xs py-0 px-2 flex items-center justify-center">
                      {v}
                    </div>
                  ))}
                  {v.facilities.length > 3 && (
                    <div>{v.facilities.length - 3} more +</div>
                  )}
                </div>
                <div className="flex items-center mt-4 ">
                  <User2 />

                  {v.guest_capacity}
                </div>

                <div className="w-full text-end font-bold text-blue-500">
                  Rp {v.price}
                </div>
              </div>
            </div>
          ))}

          <Label className=" mt-10 font-bold text-xl" htmlFor="input">
            Kebijakan Hotel
          </Label>
          <div className="text-lg">{hotelData.policy}</div>

          <div>
          </div>
        </div>
      </div>
    </div>
  );
}
