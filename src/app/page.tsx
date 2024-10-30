import React from 'react'
import Hero from '@/components/Hero'
import Todays from '@/components/Todays'
import Catogries from '@/components/Categories'
import ThisMonth from '@/components/ThisMonth'
import Pic from '@/components/Picture'
import OurProduct from '@/components/Our-products'
import Featured from '@/components/Featured'
import IconSection from '@/components/Icon'



export default function Home() {
  return (
    <div>
      <Hero />
      <Todays />
      <Catogries />
      <ThisMonth />
      <Pic />
      <OurProduct />
      <Featured />
      <IconSection />
      
      
    </div>
  )
}

