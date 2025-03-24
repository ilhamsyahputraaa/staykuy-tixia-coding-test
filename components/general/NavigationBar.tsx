import Link from 'next/link'
import React from 'react'

const NavigationBar = () => {
  return (
    <div className='flex justify-between items-center bg-blue-500 w-full h-[60px] px-[120px] text-white'>
      <div className='font-bold'>
        STAYKUY
      </div>
      <div className='flex items-center gap-20'>

      <div className='flex gap-6'>
        <Link href='#'>My Booking</Link>
        <Link href='#'>Wishlist</Link>
        <Link href='#'>Blog</Link>
        <Link href='#'>Help</Link>
        </div>      
<div className='flex items-center gap-10'>
  <div className='p-5 bg-orange-900 w-fit aspect-square rounded-full h-12 flex items-center justify-center'>T</div>
  <div>ID</div>
</div>
      </div>
    </div>
  )
}

export default NavigationBar
