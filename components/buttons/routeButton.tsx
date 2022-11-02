import React from 'react'
import Link from 'next/link'

const RouteButton = ({text, route} : {text: string, route: string}) => {

  return (
  //   <div className='flex flex-row-reverse justify-center items-center w-full h-full bg-[#00703D] rounded-md'>
  //     <Link
  //       className='flex flex-col transition hover:bg-[#FF6B18] hover:text-[#FF6B18] delay-150'
  //       href={route}>
  //         <div className="flex justify-center items-center md:text-xl lg:text-2xl xl:text-3xl bg-gray-200 h-2/6 w-1/6 rounded-sm transition text-[#FF6B18] hover:cursor-pointer hover:bg-[#FF6B18] hover:text-gray-200 bold delay-150">
  //           {text}
  //         </div>
  //     </Link>
  // </div>
  <div data-testid="searchProductsButton" className='flex justify-center items-center bg-[#FF6B18] rounded-md h-full w-full hover:cursor-pointer hover:drop-shadow-lg transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-100 duration-300' onClick={() => console.log('testing')}>
        <div className='flex justify-center items-center px-4 py-2'>
            <div className='sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center font-semibold text-white'>Register</div>
        </div>
  </div>
  )
}

export default RouteButton