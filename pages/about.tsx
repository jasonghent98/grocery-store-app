import React from 'react'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div className='flex flex-col bg-gray-200 h-screen'>
      <div className='relative bottom-6 h-1/6 shadow'>
        <Navbar/>
      </div>
      <div className='flex flex-col justify-center items-center h-1/2 gap-8'>
        <p className='text-black font-semibold text-3xl'>Welcome</p>
        <p className="flex flex-col gap-y-4 text-black font-semibold text-5xl">
          <div className='flex justify-center'>
            <p className='text-[#FF6B18]'>At GrocerySmart, we believe</p><br/>
          </div>
          <p>everyone should have the power to shop smart.</p> 
        </p>
      </div>

    </div>
  )
}

export default About