import React from 'react'

const SearchProductsButton = () => {
  return (
    <div data-testid="actionButton" className='flex justify-center items-center bg-[#FF6B18] rounded-md h-1/3 hover:drop-shadow-lg'>
        <div className='flex justify-center items-center px-4'>
            <button type='button' className='xl:text-2xl'>Search Groceries Nearby</button>
        </div>
    </div>
  )
}

export default SearchProductsButton