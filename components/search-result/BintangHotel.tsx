"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Star } from "lucide-react";

const BintangHotel = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Ambil bintang dari URL, jika ada
  const [selectedStars, setSelectedStars] = useState<number[]>(() => {
    const starsFromURL = searchParams.get("stars");
    return starsFromURL ? starsFromURL.split(",").map(Number) : [];
  });

  // Fungsi untuk handle perubahan checkbox
  const handleCheckboxChange = (star: number) => {
    let updatedStars;
    if (selectedStars.includes(star)) {
      updatedStars = selectedStars.filter((s) => s !== star);
    } else {
      updatedStars = [...selectedStars, star];
    }

    setSelectedStars(updatedStars);

    // Update URL searchParams
    const params = new URLSearchParams(searchParams.toString());
    if (updatedStars.length > 0) {
      params.set("stars", updatedStars.join(","));
    } else {
      params.delete("stars");
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div>
      <Label htmlFor="input">Bintang Hotel</Label>
      <div className="flex flex-col gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <div key={star} className="flex items-center space-x-2">
            <Checkbox
              id={star.toString()}
              checked={selectedStars.includes(star)}
              onCheckedChange={() => handleCheckboxChange(star)}
            />
            {[...Array(star)].map((_, i) => (
              <Star key={i} color="orange" fill="yellow" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BintangHotel;
