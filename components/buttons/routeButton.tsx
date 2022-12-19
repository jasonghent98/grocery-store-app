import React from 'react'
import Link from 'next/link'

const RouteButton = ({text, route} : {text: string, route: string}) => {

  return (
  <div data-testid="searchProductsButton" className='flex justify-center items-center bg-[#FF6B18] rounded-md h-full w-full hover:cursor-pointer hover:drop-shadow-lg transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-100 duration-300' onClick={() => console.log('testing')}>
        <div className='flex justify-center items-center px-4 py-2'>
            <div className='sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center font-semibold text-white'>{text}</div>
        </div>
  </div>
  )
}

export default RouteButton