import React from 'react'
import Image from 'next/image'
import logo from '../../public/globals.jpeg'

const Walmart = () => {
  return (
    <div className='flex w-screen testing w-24 sm:w-full'>
        <Image 
            className=''
            key={1}
            alt='grocery logo'
            src={logo}
            width={200}
            height={200}
        /> 

    </div>
  )
}

export default Walmart