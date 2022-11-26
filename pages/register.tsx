import React from 'react'
import Card from '../components/layout/Card';
import Navbar from '../components/Navbar';

const Register = () => {
  return (
    <div className='h-screen bg-gray-500 flex flex-col justify-center items-center '>
      
          
              <Navbar/>
          
      
      <div className='flex justify-center items-center w-5/6 h-5/6'>
        <Card/> 
      </div>
    </div>
  )
}

export default Register;