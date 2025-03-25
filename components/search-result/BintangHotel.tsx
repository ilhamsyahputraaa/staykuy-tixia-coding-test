import React from 'react'
import { Label } from '../ui/label';
import { Checkbox } from '../ui/checkbox';
import { Star } from 'lucide-react';

const BintangHotel = () => {
  return (
    <div>
      <Label htmlFor="input">Bintang Hotel</Label>
      <div className='flex flex-col gap-2'>
        <div className="flex items-center space-x-2">
          <Checkbox id="1" />
          <Star color="orange" fill="yellow" />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="2" />
          <Star color="orange" fill="yellow" />
          <Star color="orange" fill="yellow" />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="3" />
          <Star color="orange" fill="yellow" />
          <Star color="orange" fill="yellow" />
          <Star color="orange" fill="yellow" />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="4" />
          <Star color="orange" fill="yellow" />
          <Star color="orange" fill="yellow" />
          <Star color="orange" fill="yellow" />
          <Star color="orange" fill="yellow" />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="5" />
          <Star color="orange" fill="yellow" />
          <Star color="orange" fill="yellow" />
          <Star color="orange" fill="yellow" />
          <Star color="orange" fill="yellow" />
          <Star color="orange" fill="yellow" />
        </div>
      </div>
    </div>
  );
}

export default BintangHotel
