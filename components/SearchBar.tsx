import React, {useState} from 'react'

const SearchBar = ({setItem}: {setItem: React.Dispatch<React.SetStateAction<string>>} ) => {
    // const [item, setItem] = useState<string>()

  return (

         <div className='w-full h-1/3'>
             <input 
                 type="text" 
                 className='rounded w-full h-2/5 text-black bg-gray-200 relative placeholder:italic pl-3 placeholder:xl:text-2xl' 
                 placeholder='Enter Item'
                 onChange={(e) => setItem(e.target.value)}
                  />
        </div>

  )
}

export default SearchBar