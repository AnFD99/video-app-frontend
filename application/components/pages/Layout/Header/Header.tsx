import React, { FC } from 'react'

import styles from './Header.module.scss'
import HeaderIcons from './Icons/HeaderIcons'
import Search from './Search/Search'

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Search />
      <HeaderIcons />
    </header>
  )
}

export default Header
