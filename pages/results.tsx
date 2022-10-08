import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Result from '../components/Result'
import SearchBar from '../components/SearchBar'
import SearchProductsButton from '../components/buttons/SearchProductsButton'

// data from the user query should be accessible to this component 
// will need to loop over the results generated and populate the properties within the Result component
const Results = () => {
    const [item, setItem] = useState<string>()
  return (
    <div className='flex flex-col items-center h-screen w-screen bg-gray-300'>
        <div className='h-1/6'>
            <div className='h-3/5'>
                <Navbar/>
            </div>
        </div>

        <div className='flex gap-x-10 h-1/6 w-3/5'>
            <SearchBar setItem={setItem} styles={'rounded-lg w-full h-full text-black bg-gray-200 relative placeholder:italic pl-3 placeholder:sm:text-lg placeholder:md:text-xl placeholder:lg:text-2xl placeholder:xl:text-3xl'}/>
            <SearchProductsButton item={item} />
        </div>

        <div className='h-1/6 w-full flex justify-center xl:justify-start xl:ml-36'>
            <h2 className='text-xl text-black sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Search Results for userinput</h2>
        </div>
        
        <div className='flex flex-col lg:flex-row flex-wrap gap-x-3 gap-y-3 h-5/6 w-3/4 '>
            {/* will contain the list of products returned to the user */}
            <div className='h-full w-full'>
                <Result itemName='Broccolli' price='$1.99 per pound' location='538 Newell Drive, Tampa, Florida, 33269'/>
            </div>
        </div>
    </div>
  )
}

export default Results