import axios from 'axios'
import React from 'react'
import { userInputHandler } from '../../pages/api/getProducts'
import { useRouter } from 'next/router'
import {useSelector} from 'react-redux'
import { RootState } from '../../redux/store'

const SearchProductsButton = () => {

  const router = useRouter();
  const query = useSelector((state: RootState) => state.userManagementState.userQuery)

  const itemHandler = async (item: string) => {
    const userQuery = item.split(' ')
    // we can implement more specific cases of err handling later, but for now handle case where empty string is provided as input
    if (userQuery.length && userQuery[0] != '') {
      const data = {userQuery}
      // save the results of the request and save them as state in your global state store
      // const listOfItems: any = await userInputHandler('http://localhost:3000/api/getProducts', data)
      router.push('/results')
    }
  }

  return (
    <div data-testid="searchProductsButton" className='flex justify-center items-center bg-[#FF6B18] rounded-md h-1/3 hover:drop-shadow-lg transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300' onClick={() => itemHandler(query)}>
        <div className='flex justify-center items-center px-4'>
            <div className='sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center font-semibold'>Search</div>
        </div>
    </div>
  )
}

export default SearchProductsButton