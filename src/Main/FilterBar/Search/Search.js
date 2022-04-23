import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
function Search({ search_value, theme }) {
  return (
    <div className= { 
      theme ? 'main__filter_bar__search main__filter_bar__search-light-theme' : 'main__filter_bar__search main__filter_bar__search-dark-theme' }>
        <SearchIcon className='search_icon' />
        <input type="text" placeholder='Search for a country...' onChange={ (e) => search_value(e.target.value) }
        />
    </div>
  )
}

export default Search