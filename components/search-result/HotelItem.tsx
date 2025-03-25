import React from 'react'

interface HotelItemProps{
    title:string;
    description:string;
    images:string[];
    facility:string[];
}
const HotelItem:React.FC<HotelItemProps> = ({title, description, images, facility}) => {
  return (
    <div>
      {title}
      {description}
      {images.map((v)=> v)}
      {facility}
    </div>
  )
}

export default HotelItem
