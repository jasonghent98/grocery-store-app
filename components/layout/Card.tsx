import React from 'react'
import RouteButton from '../buttons/routeButton'
// will serve as the card for both the register and the login routes
const Card = () => {
  return (
    <div className="flex flex-col gap-y-8 justify-center items-center w-3/5 h-3/5 bg-gray-200 rounded-lg text-black">
        {/* div for the title */}
        <div className='flex flex-col justify-center items-center text-md sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'> 
            Welcome! <br/><span>Register Below</span>
        </div>

        {/* subcard will contain the users credentials */}
        <div className='form-data flex flex-col justify-center items-center gap-y-4 w-5/6 bg-gray-300 rounded-lg'>
            <div className='flex flex-col justify-around items-center gap-x-3 h-1/3 w-3/4 mt-4'>
                <label className=' w-full text-xs sm:text-xs md:text-sm lg:text-md xl:text-lg' htmlFor="email">Email:</label>
                <input className='rounded-md placeholder:pl-2 pl-2 w-full'type="text" placeholder='Email' id='email' />
            </div>
            <div className='flex flex-col justify-around items-center gap-x-3 h-1/3 bg-red-500 w-3/4'>
                <label className=' w-full text-xs sm:text-xs md:text-sm lg:text-md xl:text-lg' htmlFor="email" id='password'>Password:</label>
                <input className='rounded-md placeholder:pl-2 pl-2 w-full'type="text" placeholder='Password' />
            </div>
            <div className='flex flex-col justify-around items-center gap-x-3 h-1/3 bg-red-500 w-3/4'>
                <label className=' w-full text-xs sm:text-xs md:text-sm lg:text-md xl:text-lg' htmlFor="email">Confirm Password:</label>
                <input className='rounded-md placeholder:pl-2 pl-2 w-full'type="text" placeholder='Confirm Password' id='confirmPassword' />
            </div>
            <div className='flex justify-center items-center w-1/2 my-4'>
                <RouteButton text='Register' route='/'/>
            </div>
        </div>

    </div>
  )
}

export default Card