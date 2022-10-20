import React, {useState} from 'react'
import { Result } from '../types/searchResult'
import Image from 'next/image'
import { useRouter } from 'next/router'
import ViewDetails from './effects/ViewDetails'
/* a result will contain the following props
- photo
- name
- price
- location 

- could eventually have a click for more details, that renders a map for directions and contains other similar searches


*/

const SearchResult = ({photo, itemName, address, resultId, phone, hours, coordinates, description}: Result<{latitude: number, longitude: number}>) => {
  const router = useRouter();
  const [isHovering, setIsHovering] = useState<boolean>(false)
  const resultDetails = () => {
    router.push({
      pathname: `/results/${resultId}`,
      query: {
        itemName,
        address,
        phone,
        hours, 
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
        description
      }
    })
  }

  const showDetailsComponent = () => setIsHovering(true)
  const removeDetailsComponent = () => setIsHovering(false)
  return (
    <div className='h-full w-full hover:cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1 duration-300 rounded-lg bg-gray-400 mt-4' onClick={resultDetails}>
      {/* details will render softly over each result*/}
        <div className='flex flex-col justify-center gap-y-3 h-full basis-0 rounded-lg'>

            <div className='flex flex-col gap-y-2 my-6'>
              <div className='flex justify-center mx-10 relative' onMouseOver={showDetailsComponent} onMouseOut={removeDetailsComponent}>
                <Image 
                  className='flex justify-center mx-10 rounded-lg'
                  alt='thumbnail'
                  src={`${photo !== undefined ? photo : '/'}`}
                  width={300}
                  height={300}
                  />
                  {isHovering &&  
                <div className='flex justify-center items-center absolute w-full h-full'>
                  <div className='w-full h-full none rounded-lg hover:bg-[#00703D] absolute hover:opacity-50 '>
                  </div>

                  <div className='relative flex justify-center bg-gray-100 rounded-full items-center h-2/5 w-2/5'>
                    <ViewDetails/>
                  </div>
                  
                </div>
                }
              </div>
              <div className='relative top-3 text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mx-6'>{itemName}</div>
              <div className='text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl mx-6'>{address}</div>
              <div className='text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl mx-6'>{address}</div>
            </div>
        </div>

    </div>
  )
}

export default SearchResult