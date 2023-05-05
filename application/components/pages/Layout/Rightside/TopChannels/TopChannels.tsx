import React, { FC } from 'react'

import ShowMore from '@/components/ui/Button/ShowMore/ShowMore'

import { IUser } from '@/types/user.interface'

import ChannelItem from './ChannelItem'
import styles from './TopChannels.module.scss'

const TopChannels: FC<{ channels: IUser[] }> = ({ channels }) => {
  return (
    <div className={styles.top_channels}>
      <div className={styles.top}>
        <h2>Top channels</h2>
        <ShowMore />
      </div>

      <div className={styles.channels__list}>
        {channels.map((channel) => (
          <ChannelItem item={channel} key={channel._id} />
        ))}
      </div>
    </div>
  )
}

export default TopChannels
