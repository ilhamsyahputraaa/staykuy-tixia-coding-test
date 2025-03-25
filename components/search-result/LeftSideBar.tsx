import React from 'react'
import BintangHotel from './BintangHotel';
import Fasilitas from './Fasilitas';
import Harga from './Harga';
import { Label } from '../ui/label';

const LeftSideBar = () => {
  return (
    <div className="p-5 flex flex-col gap-5">
      <Label htmlFor="input" className='text-xl'>Filter Pencarian</Label>

      <BintangHotel />
      <div className="w-full border" />
      <Fasilitas />
      <div className="w-full border" />
      <Harga />
    </div>
  );
}

export default LeftSideBar
