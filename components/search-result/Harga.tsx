"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Label } from "../ui/label";
import { Slider } from "../ui/slider";

const Harga = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Ambil nilai min_price dan max_price dari URL jika ada
  const [priceRange, setPriceRange] = useState<[number, number]>(() => {
    const minPrice = searchParams.get("min_price");
    const maxPrice = searchParams.get("max_price");
    return [
      minPrice ? parseInt(minPrice, 10) : 0,
      maxPrice ? parseInt(maxPrice, 10) : 20000000, // Default Rp 20 juta
    ];
  });

  // Update searchParams di URL saat slider digeser
  const handlePriceChange = (newRange: [number, number]) => {
    setPriceRange(newRange);

    const params = new URLSearchParams(searchParams.toString());
    params.set("min_price", newRange[0].toString());
    params.set("max_price", newRange[1].toString());

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div>
      <Label htmlFor="input">Harga (Rp)</Label>
      <Slider
        value={priceRange}
        min={0}
        max={2000000} // Rp 20 juta
        step={100000} // Rp 100 ribu
        onValueChange={handlePriceChange}
      />
      <div className="flex justify-between text-sm mt-2">
        <span>Rp {priceRange[0].toLocaleString()}</span>
        <span>Rp {priceRange[1].toLocaleString()}</span>
      </div>
    </div>
  );
};

export default Harga;
