"use client";

import React, { useEffect, useState } from "react";
import InputComponent from "./InputComponent";
import CityPicker from "./CityPicker";
import { DatePicker } from "./DateRangePicker";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useCities } from "../general/CityProvider";
import { Label } from "../ui/label";

const SearchComp = () => {
  const searchParams = useSearchParams(); // ✅ Ambil parameter dari URL

  const [inputValueTamu, setInputValueTamu] = useState("2");
  const [inputValueKamar, setInputValueKamar] = useState(
    searchParams.get("kamar") || "1"
  );
  const [selectedCityId, setSelectedCityId] = useState<number | null>(
    searchParams.get("city_id")
      ? parseInt(searchParams.get("city_id") as string, 10)
      : null
  );

  const [selectedDated, setSelectedDated] = useState<string | null>(null);

  const { cities } = useCities(); // ✅ Ambil daftar kota dari Context

  const [changeSearch, setChangeSearch] = useState(true);

  // Perbaikan: Menambahkan parameter event
  const handleChange =
    (type: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      if (type === "tamu") {
        setInputValueTamu(event.target.value);
      } else {
        setInputValueKamar(event.target.value);
      }
    };

  const handleCitySelect = (city_id: number) => {
    setSelectedCityId(city_id);
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDated(date.toISOString().split("T")[0]); // Format ke YYYY-MM-DD
  };

  useEffect(() => {
    const cityIdParam = searchParams.get("city_id");
    const tamuParam = searchParams.get("tamu");
    const kamarParam = searchParams.get("kamar");
    const dateParam = searchParams.get("date");

    if (cityIdParam) {
      setSelectedCityId(parseInt(cityIdParam, 10));
    }
    if (tamuParam) {
      setInputValueTamu(tamuParam);
    }
    if (kamarParam) {
      setInputValueKamar(kamarParam);
    }
    if (dateParam) {
      setSelectedDated(dateParam);
      setChangeSearch(false);
    }
  }, [searchParams]);

  return (
    <div>
      {!changeSearch ? (
        <div className="flex gap-10 items-end p-5 bg-white w-fit rounded-2xl w-full shadow-lg justify-between">
          <div className="w-2/3 flex gap-5">
            <div className="w-1/3">
              <Label htmlFor="input">Kota/Nama Hotel/ Destinasi</Label>
              <div className="font-bold text-xl">Jakarta</div>
            </div>
            <div className="w-1/3 border-l px-5 border-r">
              <Label htmlFor="input">Tanggal Menginap</Label>
              <div className="font-bold text-xl">Jakarta</div>
            </div>
            <div className="w-1/3">
              <Label htmlFor="input">Jumlah Tamu dan Kamar</Label>
              <div className="font-bold text-xl">
                {inputValueTamu} tamu {inputValueKamar} kamar
              </div>
            </div>
          </div>

          <button
            className={`disabled:opacity-50 bg-blue-500 text-white rounded-2xl h-fit px-4 py-2`}
            onClick={() => {
              setChangeSearch(true);
            }}
          >
            Ubah Pencarian
          </button>
        </div>
      ) : (
        <>
          <div className="flex gap-5 items-end p-5 bg-white w-fit rounded-2xl shadow-xl w-full justify-between">
            <CityPicker cities={cities} onCitySelect={handleCitySelect} />
            <DatePicker onDateSelect={handleDateSelect} />

            <InputComponent
                title="Masukan Jumlah Tamu"
                value={inputValueTamu}
                placeholder="2"
                onChange={handleChange("tamu")}           />

            <InputComponent
              title="Masukan Jumlah Kamar"
              value={inputValueKamar}
              placeholder="1"  
              onChange={handleChange("kamar")}
            />

            <button
              className={`disabled:opacity-50 bg-blue-500 text-white rounded-2xl h-fit px-4 py-2`}
              disabled={selectedDated === null}
            >
              <Link
                href={`/search-result?rooms_count=${inputValueKamar}&adult_guests=${inputValueTamu}&city_id=${selectedCityId}&date=${selectedDated}`}
              >
                Cari Hotel
              </Link>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchComp;
