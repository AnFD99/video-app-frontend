import React, { FC } from 'react'

import { IUser } from '@/types/user.interface'
import { IVideo } from '@/types/video.interface'

import Line from '../../../ui/Line/Line'

import MostPopularVideo from './MostPopularVideo/MostPopularVideo'
import styles from './Rightside.module.scss'
import TopChannels from './TopChannels/TopChannels'

const Rightside: FC<{ topVideo: IVideo; topChannels: IUser[] }> = ({
  topVideo,
  topChannels
}) => {
  return (
    <div className={styles.right_side}>
      <MostPopularVideo video={topVideo} />
      <Line />
      <TopChannels channels={topChannels} />
    </div>
  )
}

export default Rightside
