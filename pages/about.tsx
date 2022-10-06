import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import getImages from './api/proxyForImages.ts'
import Walmart from '../components/logos/Walmart'

const About = () => {

  return (
    <div className='bg-gray-200 h-screen overflow-scroll'>
      <div className='flex flex-col justify-center items-center h-full'>
        <div className='h-2/6'>
          <div className='relative bottom-6 h-3/5 shadow'>
            <Navbar/>
          </div>
        </div>
            
          <div className='flex flex-col h-5/6'>
            <div className='flex flex-col justify-center items-center h-full gap-8'>
            <p className='text-black font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl'>Welcome</p>
            <div className="flex flex-col gap-y-4 mx-10 text-black font-semibold text-lg sm:text-3xl lg:text-5xl">
                <div className='flex justify-center'>
                  <p className='text-[#FF6B18] text-center'>At GrocerySmart, we believe</p><br/>
                </div>
              <p className='text-center'>everyone should have the power to shop smart.</p> 
            </div>
            </div>
          </div>

      </div>

      {/* mission statement here */}
      <div className="flex flex-col gap-x-8 justify-around items-center h-5/6 bg-gray-300 w-full">
        {/* container for just the text */}
        <div className="flex flex-col justify-center mx-8 my-8 gap-y-4 text-black font-semibold sm:text-3xl lg:text-5xl text-center">
          <h1 className='text-black md:text-5xl sm:text-4xl text-2xl font-bold mb-4 mt-48'>Our Mission To You:</h1>
          <p className='text-[#FF6B18] text-md sm:text-2xl h-4/6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, nemo sit. Necessitatibus similique odit provident. Sunt neque recusandae consequatur officiis, facere natus laudantium praesentium reprehenderit molestiae veniam laboriosam dignissimos. Vel!
        Tempora facilis, deleniti autem vitae assumenda inventore mollitia pariatur! Autem quia excepturi maiores, voluptatibus distinctio dignissimos et cupiditate repellat? Soluta eveniet mollitia recusandae temporibus perferendis ad quod voluptate inventore nesciunt.
        Quam vero quos atque reprehenderit id
          </p>
        </div>
        <div className='invisible sm:visible md:visible lg:visible xl:visible mx-14'>
          <Image 
            src={'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'}
            className=''
            height={600}
            width={600}
            layout='intrinsic'
            alt='Fruits'
            />
        </div>
      </div>

      {/* stores we offer data from  */}
      <div className='flex flex-col gap-y-4 justify-center items-center h-full bg-gray-200 overflow-scroll'>
        <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center'>Data on several grocery stores<br/><span className='flex justify-center text-[#FF6B18] font-semibold my-4'>all in one place.</span></div>
        <div>
          <Walmart />             
        </div>
      </div>



    </div>
  )
}

// export async function getStaticProps() {
//   // const domain = 'walmart.com'
//   // // const data = await getImages(domain)
//   // console.log(data, 'about.ts')
//   // return {
//   //   props: {
//   //     logos: data
//   //   }
//   // }
// }

export default About