import React, {useEffect, useState} from 'react'
import SearchBarOverlay from './SearchBarOverlay'
import SearchProductsButton from './buttons/SearchProductsButton'
import SearchBar from './SearchBar'

const SearchForProducts = () => {
  return (
    <div className='flex justify-center items-center w-5/6 h-full'>
        <SearchBarOverlay>
            <div className='flex flex-col justify-between h-5/6 w-3/5'>
              <div className='flex flex-row justify-center items-center h-1/3'>
                <p className='xl:text-6xl lg:text-5xl md:text-4xl text-2xl text-center '>What are you searching for?</p>
              </div>
              
              <SearchBar styles={'rounded-lg w-full h-2/5 text-black bg-gray-200 relative placeholder:italic pl-3 placeholder:text-lg placeholder:sm:text-xl placeholder:md:text-2xl placeholder:lg:text-3xl placeholder:xl:text-4xl'} />
              {/* 'rounded-lg w-full h-full text-black bg-gray-200 relative placeholder:italic pl-3 placeholder:sm:text-xl placeholder:md:text-2xl placeholder:lg:text-3xl placeholder:xl:text-4xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl' */}
              <div className='h-1/3'>
                <SearchProductsButton />
              </div>
            </div>
        </SearchBarOverlay>
    </div>
  )
}

export default SearchForProducts