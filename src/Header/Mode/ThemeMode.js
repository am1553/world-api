import React from 'react'
import Brightness3Icon from '@mui/icons-material/Brightness3';
import LightModeIcon from '@mui/icons-material/LightMode';


function ThemeMode({ set_theme, theme }) {
  return (
    <div className='header__theme_mode'>
        <button onClick={ () => set_theme(!theme) }>
            <div className="theme_icon">
               {
                   theme ? <Brightness3Icon /> : <LightModeIcon style={ {color: '#fff'} }/>
               } 
            </div>
            <span className="mode_text" style={ theme ? {color: '#000'} : {color: '#fff'} }>
                {
                    theme ? 'Dark Mode'  : 'Light Mode'
                }
            </span>
        </button>

    </div>
  )
}

export default ThemeMode