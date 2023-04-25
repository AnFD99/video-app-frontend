import Link from 'next/link'
import React, { FC, PropsWithChildren } from 'react'

import { IMenuItem } from './menu.interface'
import styles from './Menu.module.scss'

const MenuItem: FC<{ item: IMenuItem } & PropsWithChildren> = ({
  item,
  children
}) => {
  return (
    <li>
      <Link href={item.link} className={styles.menu__link}>
        {children}
        <span>{item.title}</span>
      </Link>
    </li>
  )
}

export default MenuItem
