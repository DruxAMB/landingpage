import Image from 'next/image'
import React from 'react'

export const Boda = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center text-center'>
        <Image src="/boda-riders.png" alt="Boda" width={500} height={500} className='w-full h-full' />
    </div>
  )
}
