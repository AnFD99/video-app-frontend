import {
  BiCalendar,
  BiCamera,
  BiGift,
  BiLike,
  BiSupport,
  BiTime
} from 'react-icons/bi'
import { HiOutlineAdjustments } from 'react-icons/hi'
import {
  MdLiveTv,
  MdOutlinePermMedia,
  MdOutlineSmartphone
} from 'react-icons/md'

import styles from './Menu.module.scss'

export const icons = [
  <MdOutlinePermMedia className={styles.icon} />,
  <BiCamera className={styles.icon} />,
  <BiGift className={styles.icon} />,
  <MdLiveTv className={styles.icon} />,
  <BiCalendar className={styles.icon} />,
  <MdOutlineSmartphone className={styles.icon} />,
  <BiLike className={styles.icon} />,
  <BiTime className={styles.icon} />,
  <HiOutlineAdjustments className={styles.icon} />,
  <BiSupport className={styles.icon} />
]
