import React from 'react'
import Link from 'next/link'
import RouteButton from './buttons/routeButton'

const Navbar = () => {
  return (
    <div className='flex flex-row-reverse w-screen h-full bg-[#00703D]'>
      <div>
        <RouteButton text='About us' route='/about'/>
      </div>
    </div>
  )
}

export default Navbar