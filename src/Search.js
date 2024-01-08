import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import './Search.css'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Search({ hidebuttons = false }) {
    const [{}, dispatch]=useStateValue()
    const[input, setInput] = useState('')
    const navigate=useNavigate()
    const search= (e) => {
        e.preventDefault()
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
        // console.log('Hitted', input)
        navigate('/search')
    }
    // console.log(input)
  return (
    <form className='search'>
        <div className='search_input'>
            <SearchIcon className='search_inputIcon' />
            <input value={input} onChange={e => setInput(e.target.value)} />
            <MicIcon />
        </div>
        {!hidebuttons ? (
            <div className='search_buttons'>
               <Button type='submit' onClick={search} varient='gradient'>Google Search</Button>
               <Button varient='gradient'>I'm Feeling Lucky</Button>
            </div>
        ) : (
            <div className='search_buttons'>
               <Button className='search_buttonsHidden' type='submit' onClick={search} varient='gradient'>Google Search</Button>
               <Button className='search_buttonsHidden' varient='gradient'>I'm Feeling Lucky</Button>
        </div>
        )}
    </form>
  )
}

export default Search