import Link from 'next/link'
import { FC } from 'react'

import styles from './ShowMore.module.scss'
import { IShowMoreButton } from './show-more.interface'

const ShowMore: FC<IShowMoreButton> = ({ path }) => {
  return (
    <Link href={path || ''}>
      <button className={styles.showMore}>Show More</button>
    </Link>
  )
}

export default ShowMore
