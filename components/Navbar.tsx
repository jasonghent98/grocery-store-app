import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex flex-row-reverse w-screen h-full bg-[#00703D]'>
            <Link
            className='transition  hover:bg-[#FF6B18] hover:text-[#FF6B18] delay-150'
            href={'/about'}>
                <div className="flex justify-center items-center relative top-7 right-4 bg-gray-200 h-1/2 w-1/6 rounded-sm transition text-[#FF6B18] hover:bg-[#FF6B18] hover:text-gray-200 bold delay-150">
                    About Us
                </div>
            </Link>
    </div>
  )
}

export default Navbar