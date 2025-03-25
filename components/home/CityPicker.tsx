"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "../ui/label";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { City } from "@/lib/type";

interface CityPickerCompProps {
  cities: City[];
  onCitySelect: (city_id: number) => void; // Tambahkan prop untuk mengirim ID kota ke parent
}

const CityPicker: React.FC<CityPickerCompProps> = ({
  cities,
  onCitySelect,
}) => {
  const [selectedCity, setSelectedCity] = React.useState<City | null>(null);
  const [open, setOpen] = React.useState(false);

  const handleSelectCity = (city: City) => {
    setSelectedCity(city);
    onCitySelect(city.id); // Kirim city_id ke parent
    setOpen(false);
  };

  return (
    <div>
      <Label htmlFor="city">Pilih Kota/Nama Hotel/Destinasi</Label>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[200px] justify-between">
            {selectedCity ? selectedCity.name : "Pilih Nama Kota..."}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Cari kota..." className="h-9" />
            <CommandList>
              <CommandEmpty>Tidak ditemukan</CommandEmpty>
              <CommandGroup>
                {cities.map((city) => (
                  <CommandItem
                    key={city.id}
                    value={city.name}
                    onSelect={() => handleSelectCity(city)}
                  >
                    {city.name}
                    <Check
                      className={`ml-auto ${
                        selectedCity?.id === city.id
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default CityPicker;
