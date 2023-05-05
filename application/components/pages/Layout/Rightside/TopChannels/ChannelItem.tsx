import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { BiCheckCircle } from 'react-icons/bi'
import { GoKebabVertical } from 'react-icons/go'
import { formatNumber } from 'utils/formatNumber'

import { IUser } from '@/types/user.interface'

import styles from './TopChannels.module.scss'

const ChannelItem: FC<{ item: IUser }> = ({ item }) => {
  return (
    <div className={styles.channel}>
      <Link href={`/c/${item._id}`}>
        <div className={styles.channel__info}>
          <div className={styles.avatar}>
            <Image
              className={styles.channel__avatar}
              src={item.avatarPath}
              alt={item.name}
              fill
              sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
            />
          </div>
          <div className={styles.info}>
            <div className={styles.name}>
              {item.name}
              {item.isVerified && (
                <BiCheckCircle className={styles.verified__icon} />
              )}
            </div>
            <div className={styles.subscribers}>
              {formatNumber(item.subscribersCount)} Subscribers
            </div>
          </div>
        </div>
      </Link>
      <Link href='#'>
        <GoKebabVertical />
      </Link>
    </div>
  )
}

export default ChannelItem
