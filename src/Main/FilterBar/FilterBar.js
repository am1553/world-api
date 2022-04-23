import React, { useState } from 'react'
import Filter from './Filter/Filter'
import Search from './Search/Search'

function FilterBar({ search_value, region_value, theme }) {

  return (
    <div className='main__filter_bar'>
      <Search search_value = { search_value } theme = { theme }/>
      <Filter region_value = { region_value } theme = { theme }/>
    </div>
  )
}

export default FilterBar