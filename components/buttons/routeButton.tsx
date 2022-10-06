import React from 'react'
import Link from 'next/link'

const RouteButton = ({text, route} : {text: string, route: string}) => {

  return (
    <div className='flex flex-row-reverse w-screen h-full bg-[#00703D]'>
      <Link
        className='flex flex-col transition hover:bg-[#FF6B18] hover:text-[#FF6B18] delay-150'
        href={route}>
          <div className="flex justify-center items-center md:text-xl lg:text-2xl xl:text-3xl relative top-14 right-4 bg-gray-200 h-2/6 w-1/6 rounded-sm transition text-[#FF6B18] hover:cursor-pointer hover:bg-[#FF6B18] hover:text-gray-200 bold delay-150">
            {text}
          </div>
      </Link>
  </div>
  )
}

export default RouteButton