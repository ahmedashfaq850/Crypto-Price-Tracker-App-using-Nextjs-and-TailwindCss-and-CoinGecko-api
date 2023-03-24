import React from 'react'
import SearchBar from './SearchBar'

const Header = () => {
  return (
    <div>
      <h1 className='text-center text-[25px] md:text-[45px] font-black mt-[60px] mainHeading'>Crypto Price Tracker</h1>
      <SearchBar />
    </div>
  )
}

export default Header