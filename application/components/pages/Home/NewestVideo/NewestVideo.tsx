import React, { FC } from 'react'

import ShowMore from '@/components/ui/Button/ShowMore/ShowMore'
import VideoItem from '@/components/ui/VideoItem/VideoItem'

import { IVideo } from '@/types/video.interface'

import styles from './NewestVideo.module.scss'

const NewestVideo: FC<{ newVideos: IVideo[] }> = ({ newVideos }) => {
  return (
    <div className={styles.newest}>
      <div className={styles.top_block}>
        <div className={styles.top__left_side}>
          <h2>Newest videos</h2>
          <ShowMore />
        </div>
        <div className={styles.sort}>By View Trending</div>
      </div>

      <div className={styles.catalog}>
        {newVideos.map((video) => (
          <VideoItem key={video._id} item={video} hasAvatar />
        ))}
      </div>
    </div>
  )
}

export default NewestVideo
