import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import SearchForProducts from '../components/SearchForProducts'
import Navbar from '../components/Navbar'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect, useState, useMemo} from 'react'
import type { RootState } from '../redux/store'
import { setUserLocation } from '../redux/actions/userActions'
import useDeepEffect from '../utility/useDeepEffect'

const Home: NextPage = ({data}: any) => {
  const dispatch = useDispatch();
  const userLocation = useSelector((state: RootState) => state.userManagementState.userLocation)
  
  // grab the user location when user routes to the home page and store as globally available state
  // only run useEffect when the city has changed within the memo object
  useDeepEffect(() => {
        const getUserCoordinates = () => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
          } else { 
            throw new Error("Geolocation is not supported by this browser.");
          }
        }      
        
        const showPosition = async (position: any) => {
          const {coords} = position;
          const {latitude, longitude} = coords;
          // run the coorindates into function that  returns user city
          const reverseGeoResponse = await axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=${process.env.NEXT_PUBLIC_REVERSE_GEOCODE_KEY}`)
          dispatch(setUserLocation({
            latitude,
            longitude,
            city: reverseGeoResponse.data.features[0].properties.city
          }))
        }  
        getUserCoordinates()
        console.log('running useEffect')

  }, [userLocation])
  
  return (
    <div className='flex flex-col justify-center items-center bg-gray-300 h-screen'>
      <div className='relative bottom-6 h-1/6'>
        <div className="h-3/5">
          <Navbar/> 
        </div>
      </div>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <div className="flex flex-row justify-center items-center h-5/6 w-screen">
          <SearchForProducts/> 
      </div>
    </div>
  )
}


export async function getServerSideProps() {

  const {data} = await axios.get('http://localhost:3000/api/hello')

  return {
    props: {
      data
    }
  }
}

export default Home
