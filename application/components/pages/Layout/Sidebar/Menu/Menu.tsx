import React, { FC } from 'react'

import Line from '@/components/ui/Line/Line'

import styles from './Menu.module.scss'
import MenuItem from './MenuItem'
import { icons } from './icons.data'
import { menu } from './menu.data'

const Menu: FC = () => {
  return (
    <ul className={styles.menu}>
      {menu.map((item, i) => (
        <>
          <MenuItem item={item} key={item.title}>
            {icons[i]}
          </MenuItem>
          {i === 3 && <Line />}
        </>
      ))}
      <Line />
    </ul>
  )
}

export default Menu
