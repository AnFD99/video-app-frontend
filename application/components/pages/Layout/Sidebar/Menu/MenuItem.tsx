import Link from 'next/link'
import React, { FC, PropsWithChildren } from 'react'

import styles from './Menu.module.scss'
import { IMenuItem } from './menu.interface'

const MenuItem: FC<PropsWithChildren<{ item: IMenuItem }>> = ({
  item,
  children
}) => {
  return (
    <Link href={item.link} className={styles.menu__link}>
      {children}
      <span>{item.title}</span>
    </Link>
  )
}

export default MenuItem
