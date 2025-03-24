import React from 'react'
import { DatePickerWithRange } from './DateRangePicker'
import { Input } from '../ui/input'
import { Label } from '../ui/label';
import { CityPicker } from './CityPicker';
import InputComponent from './InputComponent';

const SearchComp = () => {
  return (
    <div>
      <div className="text-4xl font-semibold text-center mb-10 text-white">
        Staycation menjadi lebih mudah hanya dengan satu klik dan dapatkan
        banyak promo menarik!
      </div>

      <div className='flex gap-10 items-end p-10 bg-white w-fit rounded-2xl'>
          
          <CityPicker />

          <DatePickerWithRange />
      <InputComponent title="Jumlah Tamu" value="Value" placeholder=""/>

        <div className="w-fit">
          <Label htmlFor="picture">Jumlah Kamar</Label>
          <Input type="number" placeholder="Masukan jumlah kamar" />
        </div>
        <button className='bg-blue-500 text-white rounded-2xl h-fit px-4 py-2'>Cari Hotel</button>
      </div>
    </div>
  );
}

export default SearchComp
