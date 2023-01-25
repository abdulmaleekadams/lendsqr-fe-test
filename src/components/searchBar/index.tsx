import React from 'react'
import { Search } from '../../assets/icons'
import './index.scss'
const SearchBar = () => {
  return (
      <div className='searchContainer'>
          <input type="search" placeholder='Search for anything' />
          <button type='button' title='Search' className='flexCenter'>
              <Search />
          </button>
    </div>
  )
}

export default SearchBar