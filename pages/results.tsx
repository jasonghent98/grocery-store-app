import React from 'react'
import Navbar from '../components/Navbar'
import Result from '../components/Result'

// data from the user query should be accessible to this component 
// will need to loop over the results generated and populate the properties within the Result component
const Results = () => {
  return (
    <div className='h-screen w-screen bg-gray-300'>
        <div className='h-1/6'>
            <div className='h-3/5'>
                <Navbar/>
            </div>
        </div>

        <div className='h-1/6'>
            <div className='ml-14'>
                <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl bg-blue-300'>Search Results for userinput</h2>
            </div>
        </div>

        <div className='flex flex-col lg:flex-row flex-wrap gap-x-3 gap-y-3 mx-24 h-5/6 w-3/5'>
                <Result itemName='Broccolli' price='$1.99 per pound' location='538 Newell Drive, Tampa, Florida, 33269'/>
        </div>
    </div>
  )
}

export default Results