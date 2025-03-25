"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";

const FACILITIES = [
  { id: "restaurant", name: "Restaurant" },
  { id: "meeting-rooms", name: "Meeting Rooms" },
  { id: "business-corner", name: "Business Corner" },
  { id: "fitness-center", name: "Fitness Center" },
  { id: "24-hour-front-desk", name: "24-hour Front Desk" },
  { id: "free-wifi", name: "Free Wifi" },
  { id: "airport-shuttle", name: "Airport Shuttle" },
  { id: "parking-area", name: "Parking Area" },
];

const Fasilitas = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Ambil fasilitas dari URL jika ada
  const [selectedFacilities, setSelectedFacilities] = useState<string[]>(() => {
    const facilitiesFromURL = searchParams.get("facilities");
    return facilitiesFromURL ? facilitiesFromURL.split(",") : [];
  });

  // Fungsi untuk menangani perubahan checkbox
  const handleCheckboxChange = (facility: string) => {
    let updatedFacilities;
    if (selectedFacilities.includes(facility)) {
      updatedFacilities = selectedFacilities.filter((f) => f !== facility);
    } else {
      updatedFacilities = [...selectedFacilities, facility];
    }

    setSelectedFacilities(updatedFacilities);

    // Update searchParams di URL
    const params = new URLSearchParams(searchParams.toString());
    if (updatedFacilities.length > 0) {
      params.set("facilities", updatedFacilities.join(","));
    } else {
      params.delete("facilities");
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div>
      <Label htmlFor="input">Fasilitas</Label>
      <div className="flex flex-col gap-2">
        {FACILITIES.map((facility) => (
          <div key={facility.id} className="flex items-center space-x-2">
            <Checkbox
              id={facility.id}
              checked={selectedFacilities.includes(facility.id)}
              onCheckedChange={() => handleCheckboxChange(facility.id)}
              className="me-2"
            />
            {facility.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fasilitas;
