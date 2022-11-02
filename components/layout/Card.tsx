import React from 'react'

// will serve as the card for both the register and the login routes
const Card = () => {
  return (
    <div className="flex flex-col gap-y-8 justify-center items-center w-2/5 h-2/5 bg-gray-200 rounded-lg text-black">
        {/* div for the title */}
        <div className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'> 
            Welcome! Register below 
        </div>

        {/* subcard will contain the users credentials */}
        <div className='flex gap-x-3'>
            <label htmlFor="email">Email:</label>
            <input className='rounded-md placeholder:ml-4 'type="text" placeholder='Email' id='email' />
        </div>
        <div className='flex gap-x-3'>
            <label htmlFor="email" id='password'>Password:</label>
            <input className='rounded-md placeholder:ml-4 'type="text" placeholder='Password' />
        </div>
        <div className='flex gap-x-3'>
            <label htmlFor="email">Confirm Password:</label>
            <input className='rounded-md placeholder:ml-4 'type="text" placeholder='Confirm Password' id='confirmPassword' />
        </div>
    </div>
  )
}

export default Card