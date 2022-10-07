import React from 'react'
import { Result } from '../types/searchResult'
/* a result will contain the following props
- photo
- name
- price
- location 

- could eventually have a click for more details, that renders a map for directions and contains other similar searches


*/

const SearchResult = ({photo, itemName, price, location}: Result) => {
  return (
    <div className='h-1/2'>
        <div className='flex flex-col gap-y-3 bg-gray-400 h-full rounded-lg'>
            <div className='h-3/4 mx-6'>
                <div className='flex justify-center items-center mt-6'>
                    image goes here
                </div>
            </div>
            <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mx-6'>{itemName}</div>
            <div className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mx-6'>{location}</div>
            <div className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mx-6'>{price}</div>
        </div>
    </div>
  )
}

export default SearchResult