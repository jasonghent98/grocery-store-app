import React from 'react'
import Link from 'next/link'
import RouteButton from './buttons/routeButton'
import {useRouter} from 'next/router'
import ResponsiveDrawer from './Sidebar'
import SearchBar from './SearchBar'

const Navbar = () => {
  const router = useRouter()
  return (
    // <div className='flex flex-row-reverse w-screen h-full bg-[#00703D]'>
      <div className='h-full'>
        <ResponsiveDrawer />
        {/* render the about button if we're on the home page, and the searchItem button if we're on the about page*/}

        {/* {router.pathname === '/' && <RouteButton text='About us' route='/about'/>} */}
        {/* {router.pathname === '/about' && <RouteButton text='Search Item' route='/'/>} */}
        
      </div> 
    // </div>
  )
}

export default Navbar