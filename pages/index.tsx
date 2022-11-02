import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import SearchForProducts from '../components/SearchForProducts'
import Navbar from '../components/Navbar'

// serves as the main search page... will eventually need to be changed to /searchproduct route
// if there is no user, we should route them to the sign up page, which gives users an option to do the following:
// 1. create an account, login, proceed w/o an account

// users can access this page if they are logged in or if they have already been to the register page and decided to proceed w/o 
// creating an account, which can be managed with some state
const Home: NextPage = ({data}: any) => {
  
  return (
    <div className='flex flex-col justify-center items-center bg-gray-300 h-screen'>
      <div className='relative bottom-6 h-1/6'>
        <div className="h-3/5">
          <Navbar/> 
        </div>
      </div>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <div className="flex flex-row justify-center items-center h-5/6 w-screen">
          <SearchForProducts/> 
      </div>
    </div>
  )
}


export async function getServerSideProps() {

  const {data} = await axios.get('http://localhost:3000/api/hello')

  return {
    props: {
      data
    }
  }
}

export default Home
