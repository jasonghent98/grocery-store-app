import React from 'react'

const SearchProductsButton = ({item}: any) => {
  
  const sendItemToBackend = () => {
    console.log(item)
  }

  return (
    <div data-testid="searchProductsButton" className='flex justify-center items-center bg-[#FF6B18] rounded-md h-1/3 hover:drop-shadow-lg' onClick={sendItemToBackend}>
        <div className='flex justify-center items-center px-4'>
            <div className='xl:text-2xl'>Search Item Nearby</div>
        </div>
    </div>
  )
}

export default SearchProductsButton