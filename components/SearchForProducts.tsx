import React from 'react'
import SearchBarOverlay from './SearchBarOverlay'
import SearchProductsButton from './buttons/SearchProductsButton'

const SearchForProducts = () => {
  return (
    <div className='flex flex-col justify-center items-center w-5/6 h-5/6'>
        <SearchBarOverlay>
            <div className='flex my-4 mx-2'>
                <input type="text" className='rounded'/>
            </div>
            {/* button for searching products */}
            <div>
                <SearchProductsButton />
            </div>
        </SearchBarOverlay>
    </div>
  )
}

export default SearchForProducts