import React, { useEffect } from 'react'
import { useState } from 'react'
import {auth} from '../../auth/firebase'
import { signInWithPhoneNumber } from 'firebase/auth'
import { RecaptchaVerifier } from 'firebase/auth'
import {useDispatch} from "react-redux"
import {setUserObject} from "../../redux/actions/userActions"
import Router from 'next/router'

// must be placed outside components
declare const window: Window & typeof globalThis & {recaptchaVerifier: any, confirmationResult: any}

const PhoneLogin = () => {
  const dispatch = useDispatch();

  const [isAuthCodeSent, setIsAuthCodeSent] = useState<boolean>(false)
  const [phoneNumber, setPhoneNumber] = useState<string>("") 
  const [securityCode, setSecurityCode] = useState<string>("")

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha', {
      'size': 'invisible',
      'callback': (response: any) => {}
    }, auth);
  }

  const requestSecurityCode = async (e: any) => {
    // if (phoneNumber.length !== 10) throw new Error("Phone number must be 10 digits")
      setIsAuthCodeSent(true);
      generateRecaptcha();
      const appVerifier = window.recaptchaVerifier;
      // will send a security code to the user if the promise resolves
      signInWithPhoneNumber(auth, phoneNumber, appVerifier).then((confirmationResult: any) => {
        window.confirmationResult = confirmationResult
        console.log(confirmationResult)
      });
  }

  const verifySecurityCode = (event: any) => {
    const target = event.target as HTMLTextAreaElement;
    setSecurityCode(target.value);

    if (securityCode.length !== 6) return;

    console.log(securityCode);
    const confirmationResult = window.confirmationResult;

    confirmationResult.confirm(securityCode).then((result: any) => {
      const user = result.user
      dispatch(
        setUserObject({
          email: null,
          phoneNumber: user.phoneNumber,
          uid: user.uid
        })
      )
      Router.push('/home')
      return user;
    }).catch((err: any) => {
      console.log(err)
    })
  }
  useEffect(() => {console.log(securityCode)}, [securityCode])

  return (
    <div className='flex flex-col gap-x-5 bg-gray-200'>
      <div 
        className='phoneNumberContainer' 
        onChange={(event: any) => {
          const target = event.target as HTMLTextAreaElement
          setPhoneNumber(target.value)
        }}
        >
        <label htmlFor="phoneLogin">Phone Number</label>
        <input type="text" id='phoneLogin' className='bg-gray-300' />
      </div>
      {isAuthCodeSent && 

      <div className='securityCodeContainer'>
        <div>
          <label htmlFor="securityCode">Enter Security Code</label>
        </div>
         <div 
            className='w-1/2'
            onChange={(event: any) => {
              const target = event.target as HTMLTextAreaElement
              setSecurityCode(target.value)
            }}>
          <input type="text" id='securityCode' className='bg-gray-300'/>
        </div>

      </div>
      }

      <div id="recaptcha"></div>

      {!isAuthCodeSent && 
        <div>
          <button onClick={requestSecurityCode}>Get Auth Code</button>
        </div> 
      }
      {isAuthCodeSent && <button onClick={verifySecurityCode}>Validate Auth Code</button>}

    </div>
  )
}

export default PhoneLogin