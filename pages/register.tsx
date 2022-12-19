import React from 'react'
import Card from '../components/layout/Card';
import Navbar from '../components/Navbar';

// user object is initially null within the redux state but will be created once a user logs in
const Register = () => {
  return (
    <div className='h-screen bg-gray-500 flex flex-col justify-center items-center '>
      <Navbar/>
      <div className='flex justify-center items-center w-5/6 h-5/6'>
      <Card isRegister={true} /> 
      </div>
    </div>
  )
}

export default Register;