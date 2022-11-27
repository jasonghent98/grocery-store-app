import React, {useState} from 'react'
import RouteButton from '../buttons/routeButton'
import { signUpUser } from '../../auth/register'

// will serve as the card for both the register and the login routes
const Card = () => {

    const onRegisterHandler = async () => {
        // if user provided phone number, pass into function
        if (phoneNumber !== '') {
           await signUpUser(email, password, phoneNumber)
           return;
        }
        await signUpUser(email, password)
    }
    
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [phoneNumber, setPhoneNumber] = useState<string>('')

  return (
    <div className="flex flex-col gap-y-8 justify-center items-center w-3/5 h-4/5 bg-gray-200 rounded-lg text-black">
        {/* div for the title */}
        <div className='flex flex-col justify-center items-center text-md sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'> 
            <div className='font-bold'>Welcome</div> <br/>
            <div className='relative bottom-5 font-semibold'><span>Register Below</span></div>
        </div>
        {/* subcard will contain the users credentials */}
        <div className='form-data flex flex-col justify-center items-center gap-y-4 w-5/6 bg-gray-300 rounded-lg'>
            <div 
                className='flex flex-col justify-around items-center gap-x-3 h-1/3 w-3/4 mt-4' 
                onChange={(event) => {
                    const target = event.target as HTMLTextAreaElement
                    setEmail(target.value)
                    
                }}>
                <label className=' w-full text-xs sm:text-xs md:text-sm lg:text-md xl:text-lg' htmlFor="email">Email:</label>
                <input className='rounded-md placeholder:pl-2 pl-2 w-full' type="text" placeholder='Email' id='email' required />
            </div>

            <div 
                className='flex flex-col justify-around items-center gap-x-3 h-1/3 w-3/4'
                 onChange={(event) => {
                    const target = event.target as HTMLTextAreaElement
                    setPassword(target.value)
                 }}>
                <label className=' w-full text-xs sm:text-xs md:text-sm lg:text-md xl:text-lg' htmlFor="email" id='password'>Password:</label>
                <input className='rounded-md placeholder:pl-2 pl-2 w-full'type="text" placeholder='Password' required />
            </div>

            <div 
                className='flex flex-col justify-around items-center gap-x-3 h-1/3 w-3/4' 
                onChange={(event) => {
                    const target = event.target as HTMLTextAreaElement
                    setConfirmPassword(target.value)
                 }}>
                <label className=' w-full text-xs sm:text-xs md:text-sm lg:text-md xl:text-lg' htmlFor="email">Confirm Password:</label>
                <input className='rounded-md placeholder:pl-2 pl-2 w-full'type="text" placeholder='Confirm Password' id='confirmPassword' required />
            </div>

            <div 
                className='flex flex-col justify-around items-center gap-x-3 h-1/3 w-3/4' 
                onChange={(event) => {
                    const target = event.target as HTMLTextAreaElement
                    setPhoneNumber(target.value)
                 }}>
                <label className=' w-full text-xs sm:text-xs md:text-sm lg:text-md xl:text-lg' htmlFor="email">Phone Number (Optional): </label>
                <input className='rounded-md placeholder:pl-2 pl-2 w-full'type="text" placeholder='Phone Number' id='confirmPassword' />
            </div>

            <div 
                className='flex justify-center items-center w-1/2 my-4' 
                onClick={onRegisterHandler}>
                <RouteButton text='Register' route='/'/>
            </div>
        </div>

    </div>
  )
}

export default Card