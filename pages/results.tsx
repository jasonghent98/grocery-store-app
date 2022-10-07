import React from 'react'
import Navbar from '../components/Navbar'

const Results = () => {
  return (
    <div className='h-screen w-screen bg-gray-300'>
        <div className='h-1/6'>
            <div className='h-3/5'>
                <Navbar/>
            </div>
        </div>

        <div className='h-1/6'>
            <div className='ml-14'>
                <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl bg-blue-300'>Search Results for userinput </h2>
            </div>
        </div>
    </div>
  )
}

export default Results