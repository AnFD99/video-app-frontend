import React, { FC } from 'react'
import { BiSearch } from 'react-icons/bi'

import HeaderIcons from './Icons/HeaderIcons'

const Header: FC = () => {
  return (
    <header id='header'>
      <div className='search_top'>
        <label>
          <input type='text' placeholder='Search videos, stars or authors...' />
          <BiSearch />
        </label>
      </div>
      <HeaderIcons />
    </header>
  )
}

export default Header
