import React from 'react'
import Link from 'next/link'
import RouteButton from './buttons/routeButton'
import {useRouter} from 'next/router'
import ResponsiveDrawer from './Sidebar'
import SearchBar from './SearchBar'

const Navbar = () => {
  const router = useRouter()
  return (
      <div className='h-1/6'>
        <ResponsiveDrawer />
      </div> 
  )
}

export default Navbar