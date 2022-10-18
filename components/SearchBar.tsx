import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { setUserInput } from '../redux/actions/userActions'
import { SearchBarProps } from '../types/props/SearchBarProps'

const SearchBar = ({styles}: SearchBarProps) => {
  const dispatch = useDispatch();
    // const [item, setItem] = useState<string>()

  return (

         <div className='w-full h-1/3'>
             <input 
                 type="text" 
                 className={styles} 
                 placeholder='Enter Item'
                 onChange={(e) => dispatch(setUserInput(e.target.value))}
                />
        </div>

  )
}

export default SearchBar