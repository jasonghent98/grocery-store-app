import React, {useEffect, useState, useRef} from 'react'
import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar'
import axios from 'axios'
import { dividerClasses } from '@mui/material'
import RenderMap from '../../components/Map'
const mapboxgl = require('mapbox-gl')
import MapRender from '../../components/Map'

// dynamic page that will contain all the detailed information about a searched product in the client's area
// need to ensure the api results contain locations so that we can provide a map for the user for locating stores

const Product = ({data}: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  // `https://api.mapbox.com/geocoding/v5/mapbox.places/${data.latitude},${data.longitude}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_KEY}`
    const router = useRouter()
    const {productId} = router.query

    // 
    useEffect(() => {

      const createMapWithLocation = async () => {
        const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${data.latitude},${data.longitude}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_KEY}`)
        return response
      }

      // wait for the api to render map before setting page as loaded
      // createMapWithLocation().then(res => console.log(res)).catch(err => console.log(err))
      setIsLoading(false)
      console.log(isLoading)
    }, [isLoading, data.latitude, data.longitude])

  return (
    <div className='h-screen bg-gray-300'>
      {!isLoading ? 
      <div className='h-full flex flex-col'>

        <div className='h-1/6'>
          <div className='h-3/5'>
           <Navbar/>
          </div>
        </div>

          {/* product details */}
        <div className='bg-gray-400 h-5/6 flex flex-col gap-y-32 justify-center items-center mx-12 lg:flex-row xl:flex-row'>
          <div className='flex flex-col gap-y-3 w-1/2 mx-8'>
            <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold'>{data.itemName}</h1>
            <div className='text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl'>{data.address}</div>
            <div className='text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl'>{data.phone}</div>
            <div className='text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl'>{data.hours}</div>
          </div>
          {/* map API to display relative location */}
          {/* <div className='w-1/2 h-1/2 mx-8'>
              <RenderMap latitude={data.latitude} longitude={data.longitude} />
          </div> */}
          <div className='w-3/4 lg:w-1/2 xl:w-1/2 h-1/2 lg:mr-14 xl:mr-14 '>
            <MapRender latitude={data.latitude} longitude={data.longitude}/>
          </div>
       </div>

      </div>
      
      : 
       <div>Loading... </div>
      }
    </div>
  )
}

// server side props bc the data is not available ahead of user's request

export async function getServerSideProps(context: any) {
  const {req, res, query} = context

  return {
    props: {
      data: query
    }
  }
}

export default Product