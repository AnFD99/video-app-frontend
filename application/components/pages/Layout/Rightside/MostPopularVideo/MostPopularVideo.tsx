import React, { FC } from 'react'

import ShowMore from '@/components/ui/Button/ShowMore/ShowMore'
import VideoItem from '@/components/ui/VideoItem/VideoItem'

import { IVideo } from '@/types/video.interface'

import styles from './MostPopularVideo.module.scss'

const MostPopularVideo: FC<{ video: IVideo }> = ({ video }) => {
  return (
    <div className={styles.most_popular}>
      <div className={styles.top}>
        <h2>Most popular</h2>
        <ShowMore />
      </div>

      <VideoItem item={video} hasAvatar size='hot' />
    </div>
  )
}

export default MostPopularVideo
