import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function Filter({ region_value, theme }) {
    const [panel, setPanel] = useState(false)

    const handleClick = () => {
        setPanel(!panel)
    }

  return (
    <div className={ theme ? 'main__filter_bar__filter main__filter_bar__filter-light-theme' : 'main__filter_bar__filter main__filter_bar__filter-dark-theme' }>
        <button onClick={ handleClick }>
            <span>Filter by Region</span>
            <KeyboardArrowDownIcon className='filter_icon'/>
        </button>

        <ul className='region_panel' style={ panel ? {height: '152px', padding: '1rem'} : {height: '0px'} }>
            <li onClick={ (e)=> region_value(e.target.innerText) }>Africa</li>
            <li onClick={ (e)=> region_value(e.target.innerText) }>Americas</li>
            <li onClick={ (e)=> region_value(e.target.innerText) }>Asia</li>
            <li onClick={ (e)=> region_value(e.target.innerText) }>Europe</li>
            <li onClick={ (e)=> region_value(e.target.innerText) }>Oceania</li>
        </ul>
    </div>
  )
}

export default Filter