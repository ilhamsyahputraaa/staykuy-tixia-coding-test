import { MapPinCheck, Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

interface HotelItemProps{
    title:string;
    description:string;
    images:string[];
    facility:string[];
    price:number
    star:number
    address:string
}
const HotelItem:React.FC<HotelItemProps> = ({price,title, description, images, facility, star, address}) => {
  return (
    <div className="flex shadow-md hover:shadow-xl duration-300 border  rounded-2xl">
      <div className="w-[300px]   overflow-hiden">
        <Image
          width={1000}
          height={1000}
          src={images[0]}
          alt={title}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="w-3/4 p-5">
        <div className="font-bold">{title}</div>
        <div className="flex">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={18}
              className={index < star ? "text-yellow-400" : "text-gray-500"}
              fill={index < star ? "yellow" : "gray"}
            />
          ))}
        </div>
        <div className="text-xs text-gray-500 flex gap-1 items-center">
          {" "}
          <MapPinCheck size={13} /> {address}
        </div>
        <div className="line-clamp-2 text-sm">{description}</div>
        <div className="flex-wrap flex gap-2">
          {facility.slice(0, 3).map((v) => (
            <div className="bg-blue-100 rounded-full text-xs py-0 px-2 flex items-center justify-center">
              {v}
            </div>
          ))}
          {facility.length > 3 && <div>{facility.length - 3} more +</div>}
        </div>

        <div className="w-full text-end font-bold text-blue-500">Rp {price}</div>
      </div>
    </div>
  );
}


export default HotelItem