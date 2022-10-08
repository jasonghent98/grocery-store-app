import React, {useState} from 'react'
import { SearchBarProps } from '../types/props/SearchBarProps'

const SearchBar = ({setItem, styles}: SearchBarProps) => {
    // const [item, setItem] = useState<string>()

  return (

         <div className='w-full h-1/3'>
             <input 
                 type="text" 
                 className={styles} 
                 placeholder='Enter Item'
                 onChange={(e) => setItem(e.target.value)}
                />
        </div>

  )
}

export default SearchBar