import React, {useState} from 'react'
import { Result } from '../types/searchResult'
import Image from 'next/image'
import { useRouter } from 'next/router'
import ViewDetails from './effects/viewDetails'
/* a result will contain the following props
- photo
- name
- price
- location 

- could eventually have a click for more details, that renders a map for directions and contains other similar searches


*/

const SearchResult = ({photo, itemName, address, location, resultId}: Result) => {
  const router = useRouter();
  const [isHovering, setIsHovering] = useState<boolean>(false)
  const resultDetails = () => {
    router.push(`/results/${resultId}`)
  }

  const showDetailsComponent = () => setIsHovering(true)
  const removeDetailsComponent = () => setIsHovering(false)
  return (
    <div className='h-full w-full hover:cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300 hover:rounded-lg bg-gray-400 hover:bg-[#FF6B18]' onClick={resultDetails} onMouseOver={showDetailsComponent} onMouseOut={removeDetailsComponent}>
      {/* details will render softly over each result*/}
      {isHovering && <ViewDetails/>}
        <div className='flex flex-col justify-center gap-y-3 h-full basis-0 rounded-lg'>

            <div className='flex flex-col gap-y-3 my-6'>
              <div className='flex justify-center mx-10'>
                <Image 
                  className='rounded-lg'
                  alt='thumbnail'
                  src={`${photo}`}
                  width={300}
                  height={300}
                />
              </div>
              <div className='text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mx-6'>{itemName}</div>
              <div className='text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl mx-6'>{location}</div>
              <div className='text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl mx-6'>{address}</div>
            </div>
        </div>
    </div>
  )
}

export default SearchResult