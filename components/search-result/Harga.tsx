import React from 'react'
import { Label } from '../ui/label';
import { Slider } from '../ui/slider';

const Harga = () => {
  return (
    <div>
      <Label htmlFor="input">Harga</Label>
      <Slider value={[2,42]} min={10} max={100} />
    </div>
  );
}

export default Harga
