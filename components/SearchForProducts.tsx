import React, {useEffect, useState} from 'react'
import SearchBarOverlay from './SearchBarOverlay'
import SearchProductsButton from './buttons/SearchProductsButton'

const SearchForProducts = () => {
  const [item, setItem] = useState('')

  return (
    <div className='flex justify-center items-center w-5/6 h-full'>
        <SearchBarOverlay>
            <div className='flex flex-col justify-between h-5/6 w-3/5'>
              <div className='flex flex-row justify-center items-center h-1/3'>
                <p className='xl:text-6xl lg:text-5xl md:text-4xl text-2xl text-center '>What are you searching for?</p>
              </div>
              <div className='w-full h-1/3'>
                <input 
                  type="text" 
                  className='rounded w-full h-2/5 text-black bg-gray-200 relative placeholder:italic pl-3 placeholder:xl:text-2xl' 
                  placeholder='Enter Item'
                  onChange={(e) => setItem(e.target.value)}
                  />
              </div>
              <div className='h-1/3'>
                <SearchProductsButton item={item} />
              </div>
            </div>
        </SearchBarOverlay>
    </div>
  )
}

export default SearchForProducts