import React, {useState } from 'react'
import RouteButton from '../buttons/routeButton'
import { signUpUser } from '../../auth/register'
import { useDispatch } from 'react-redux'
import { setUserObject } from '../../redux/actions/userActions'
import { useRouter } from 'next/router'
import Link from 'next/link'
import ChooseLoginMethod from './ChooseLoginMethod'
import PhoneLogin from './phoneLogin'

interface Iprops {
    isRegister: boolean
}

// will serve as the card for both the register and the login routes
const Card = (props: Iprops) => {
    // hooks
    const router = useRouter();
    const dispatch = useDispatch();

    // state
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [phoneNumber, setPhoneNumber] = useState<string>('')
    const [isAuthWithEmail, setIsAuthWithEmail] = useState<boolean>(false)
    const [isAuthWithPhone, setIsAuthWithPhone] = useState<boolean>(false)

    // event handler
    const onRegisterHandler = async () => {
        // passwords must match here
        if (password !== confirmPassword) {
            throw new Error('Passwords must match')
            return;
        }

        let user;
        // phone number is optional
        if (phoneNumber !== '') {
           user = await signUpUser(email, password, phoneNumber)
           // if err out, stop function and prompt user that req failed

           // continue, store user data to redux
            dispatch(
                setUserObject({
                    email, 
                    uid: user.uid, 
                    phoneNumber
                })
            )
           router.push('/');
           return 
        }
        user = await signUpUser(email, password)
        dispatch(
            setUserObject({
                email, 
                uid: user.uid, 
                phoneNumber: null 
            })
        )
        router.push('/')
        return
    }

  return (
    <div className="flex flex-col gap-y-8 justify-center items-center w-3/5 h-4/5 bg-gray-200 rounded-lg text-black">
        {/* div for the title */}
        <div className='flex flex-col justify-center items-center text-md sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'> 
            <div className='font-bold'>Welcome</div> <br/>
            <div className='relative bottom-5 font-semibold'><span>{props.isRegister ? "Register below" : "Login below"}</span></div>
        </div>

        {/* if login card and the user hasnt chosen which auth method they would like, display the option */}
        {
        ( (!isAuthWithEmail && !isAuthWithPhone) && !props.isRegister) &&
            <ChooseLoginMethod setIsAuthWithPhone={setIsAuthWithPhone} setIsAuthWithEmail={setIsAuthWithEmail} />
        }


        {
            isAuthWithPhone && <PhoneLogin />
        }



        {/* -- this section should probably be extrapolated into its own component -- */}


        {/* if is register route or user has chosen to auth with email, show email and password option*/}
        { (props.isRegister || isAuthWithEmail)  && 
        <div className='form-data flex flex-col justify-center items-center gap-y-4 w-5/6 bg-gray-300 rounded-lg'>
            <div 
                className='flex flex-col justify-around items-center gap-x-3 h-1/3 w-3/4 mt-4' 
                onChange={(event) => {
                    const target = event.target as HTMLTextAreaElement
                    setEmail(target.value)
                }}>
                <label className=' w-full text-xs sm:text-xs md:text-sm lg:text-md xl:text-lg font-medium' htmlFor="email">Email</label>
                <input className='rounded-md placeholder:pl-2 pl-2 w-full' type="text" placeholder='Email' id='email' required />
            </div>

            <div 
                className='flex flex-col justify-around items-center gap-x-3 h-1/3 w-3/4'
                 onChange={(event) => {
                    const target = event.target as HTMLTextAreaElement
                    setPassword(target.value)
                 }}>
                <label className=' w-full text-xs sm:text-xs md:text-sm lg:text-md xl:text-lg font-medium' htmlFor="email" id='password'>Password</label>
                <input className='rounded-md placeholder:pl-2 pl-2 w-full' type="password" placeholder='Password' id="password" required />
            </div>

            {/* add an additional confirm passsword and add phone number if this is being used as register */}
            { props.isRegister &&  
            <div className='flex flex-col justify-around items-center gap-x-3 h-1/3 w-3/4'>
                <div 
                 className='w-full' 
                 onChange={(event) => {
                     const target = event.target as HTMLTextAreaElement
                     setConfirmPassword(target.value)
                     }}>
                    <label className=' w-full text-xs sm:text-xs md:text-sm lg:text-md xl:text-lg font-medium' htmlFor="email">Confirm Password</label>
                    <input className='rounded-md placeholder:pl-2 pl-2 w-full'type="password" placeholder='Confirm Password' id='confirmPassword' required />
                </div>

                <div 
                    className='w-full' 
                    onChange={(event) => {
                        const target = event.target as HTMLTextAreaElement
                        setPhoneNumber(target.value)
                     }}>
                    <label className=' w-full text-xs sm:text-xs md:text-sm lg:text-md xl:text-lg font-medium' htmlFor="email">Phone Number (Optional) </label>
                    <input className='rounded-md placeholder:pl-2 pl-2 w-full'type="text" placeholder='Phone Number' id='phoneNumber' />
                </div>
            </div>
            }   

            <div className='hover:text-blue-600'>
                <Link className="" href={props.isRegister ? '/login' : '/register'}>{props.isRegister ? "Already have an account? Login here" : "Dont have an account? Create one here"}</Link>
            </div>

            <div 
                className='flex justify-center items-center w-1/2 my-4' 
                onClick={onRegisterHandler}>
                <RouteButton text={props.isRegister ? "Register" : "Login"} route='/'/>
            </div>


        </div>
        }

    </div>
    
  )
}

export default Card