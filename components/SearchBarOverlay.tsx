import React from 'react'

interface IProps{
    children: React.ReactNode
}
const SearchBarOverlay = ({children}: IProps) => {
  return (
    <div className='flex flex-col justify-center items-center bg-green-500 h-5/6 w-5/6 rounded-md'>
        {children}
    </div>
  )
}

export default SearchBarOverlay