import React from 'react'
import { Result } from '../types/searchResult'
import Image from 'next/image'
/* a result will contain the following props
- photo
- name
- price
- location 

- could eventually have a click for more details, that renders a map for directions and contains other similar searches


*/

const SearchResult = ({photo, itemName, price, location}: Result) => {
  return (
    <div className='h-full w-full'>
        <div className='flex flex-col justify-center gap-y-3 bg-gray-400 h-full basis-0 rounded-lg overflow-auto'>
            <div className='h-3/4 mx-6'>
                <div className='flex justify-center items-center mt-6'>
                    image goes here
                </div>
            </div>
            <div className='flex flex-col gap-y-3 my-6'>
              <div className='relative'>
                <Image 
                  className='absolute w-1/2 h-1/2'
                  alt='thumbnail'
                  src={`${photo}`}
                  height={50}
                  width={50}
                />
              </div>
              <div className='text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mx-6'>{itemName}</div>
              <div className='text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl mx-6'>{location}</div>
              <div className='text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl mx-6'>{price}</div>
            </div>
        </div>
    </div>
  )
}

export default SearchResult