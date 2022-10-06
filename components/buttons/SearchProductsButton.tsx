import axios from 'axios'
import React from 'react'
import { userInputHandler } from '../../pages/api/getProducts'

const SearchProductsButton = ({item}: any) => {
  
  const itemHandler = async () => {
    const query = item.split(' ')
    // we can implement more specific cases of err handling later, but for now handle case where empty string is provided as input
    if (query.length && query[0] != '') {
      const data = {query}
      // save the results of the request and save them as state in your global state store
      const listOfItems: any = await userInputHandler('http://localhost:3000/api/getProducts', data)
    }

  }

  return (
    <div data-testid="searchProductsButton" className='flex justify-center items-center bg-[#FF6B18] rounded-md h-1/3 hover:drop-shadow-lg transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300' onClick={itemHandler}>
        <div className='flex justify-center items-center px-4'>
            <div className='sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center font-semibold'>Search Item Nearby</div>
        </div>
    </div>
  )
}

export default SearchProductsButton