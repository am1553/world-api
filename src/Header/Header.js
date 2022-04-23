import React from 'react'
import ThemeMode from './Mode/ThemeMode'

function Header({ set_theme, theme }) {
  return (
    <div className='header' style={ theme ? {backgroundColor: '#fff'} : {backgroundColor: '#2B3844'} }>
        <h1 style={ theme ? {color: '#000'} : {color: '#fff'} }>Where in the world?</h1>
        <ThemeMode set_theme = { set_theme } theme = { theme } />
    </div>
  )
}

export default Header