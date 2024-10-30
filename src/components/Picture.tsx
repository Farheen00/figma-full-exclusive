
import React from 'react'
import Image from 'next/image'

export default function Pic() {
  return (
    <main className=" w-[80%] mx-auto items-center my-[100px]">
      
        <Image src="/black-image.png" alt='image' width={1100} height={400} />
      
    </main>
  )
}


