import React from "react";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Star } from "lucide-react";

const Fasilitas = () => {
  return (
    <div className="">
      <Label htmlFor="input">Fasilitas</Label>
      <div className="flex flex-col gap-2">
        <div className="flex items-center space-x-2">
          <Checkbox className="me-2" id="1" /> Kolam Renang
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox className="me-2" id="2" /> Parkir Gratis
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox className="me-2" id="3" /> Pusat Kebugaran
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox className="me-2" id="4" /> Spa
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox className="me-2" id="5" /> Mesin Cuci
        </div>
      </div>
    </div>
  );
};

export default Fasilitas;
