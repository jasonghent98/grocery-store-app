import React from 'react'
import { Result } from '../types/searchResult'
import Image from 'next/image'
import { useRouter } from 'next/router'
/* a result will contain the following props
- photo
- name
- price
- location 

- could eventually have a click for more details, that renders a map for directions and contains other similar searches


*/

const SearchResult = ({photo, itemName, price, location, resultId}: Result) => {
  const router = useRouter();

  const resultDetails = () => {
    router.push(`/results/${resultId}`)
  }
  return (
    <div className='h-full w-full hover:cursor-pointer' onClick={resultDetails}>
        <div className='flex flex-col justify-center gap-y-3 bg-gray-400 h-full basis-0 rounded-lg'>
            <div className='flex flex-col gap-y-3 my-6'>
              <div className='relative'>
                <Image 
                  className='rounded-lg'
                  alt='thumbnail'
                  src={`${photo}`}
                  width={300}
                  height={300}
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