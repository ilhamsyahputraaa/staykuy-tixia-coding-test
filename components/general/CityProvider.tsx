"use client";

import React, { createContext, useContext, useState } from "react";
import { City } from "@/lib/type";

// 1️⃣ Buat Context
const CityContext = createContext<{ cities: City[] }>({
  cities: [],
});

// 2️⃣ Buat Provider
export default function CityProvider({
  children,
  cities: initialCities,
}: {
  children: React.ReactNode;
  cities: City[];
}) {
  const [cities] = useState(initialCities);

  return (
    <CityContext.Provider value={{ cities }}>{children}</CityContext.Provider>
  );
}

// 3️⃣ Hook untuk mengambil context
export const useCities = () => useContext(CityContext);
