import React, { FC } from 'react'

import HeaderIcons from './Icons/HeaderIcons'

const Header: FC = () => {
  return (
    <header id='header'>
      <div className='search_top'>
        <label>
          <input type='text' placeholder='Search videos, stars or authors...' />
          <img src='img/common/search.svg' alt='' />
        </label>
      </div>
      <HeaderIcons />
    </header>
  )
}

export default Header
