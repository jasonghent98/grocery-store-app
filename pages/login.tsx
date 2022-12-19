import Navbar from "../components/Navbar"
import Card from "../components/layout/Card"


export default function Login () {
  return (
  <div className='h-screen bg-gray-500 flex flex-col justify-center items-center '>
    <Navbar/>
    <div className='flex justify-center items-center w-5/6 h-5/6'>
      <Card isRegister={false} /> 
    </div>
  </div> 
  )
}