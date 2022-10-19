import axios from 'axios'
import React from 'react'
import { userInputHandler } from '../../pages/api/getProducts'
import { useRouter } from 'next/router'
import {useSelector} from 'react-redux'
import { RootState } from '../../redux/store'

const SearchProductsButton = () => {

  const router = useRouter();
  const userQuery = useSelector((state: RootState) => state.userManagementState.userQuery)
  const userLocation = useSelector((state: RootState) => state.userManagementState.userLocation)

  const itemHandler = async (item: string) => {
    const userInput = item.split(' ')
    // we can implement more specific cases of err handling later, but for now handle case where empty string is provided as input
    if (userInput.length && userInput[0] != '') {
      // save the results of the request and save them as state in your global state store
      // const listOfItems: any = await userInputHandler('http://localhost:3000/api/getProducts', data)
    
      const query = userInput.join('+')
      console.log(userLocation.city.toLowerCase())

      router.push({
        pathname: '/results',
        query: {
          queryString: query,
          userCity: userLocation.city,
          userState: userLocation.state,
          userCountry: userLocation.country
        }
      })
    }
  }

  return (
    <div data-testid="searchProductsButton" className='flex justify-center items-center bg-[#FF6B18] rounded-md h-1/3 hover:drop-shadow-lg transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300' onClick={() => itemHandler(userQuery)}>
        <div className='flex justify-center items-center px-4'>
            <div className='sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center font-semibold'>Search</div>
        </div>
    </div>
  )
}

export default SearchProductsButton