import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import "../Stylesheet/Components/SearchBar.scss";

export const SearchBar = ({ isSearchBarMenuOpen, setIsSearchBarMenuOpen }) => {

  const toggleMainBar = ({ isSearchBarMenuOpen, setIsSearchBarMenuOpen }) => {
    setIsSearchBarMenuOpen(!isSearchBarMenuOpen);
}

  return (
    <div className='searchMenu'>
      <div className='main'>
        <div>
          <input></input>
          <CloseIcon className='closeIcon' />
        </div>
        <div>
          <h1>SUGGESTIONS:</h1>
          <p>Dress</p>
          <p>Loafers</p>
        </div>
      </div>
    </div>
  )
}
