import React, { FC } from 'react'

import VideoItem from '@/components/ui/VideoItem/VideoItem'

import { IVideo } from '@/types/video.interface'

import Slider from './Slider'
import styles from './WeeklyFeatured.module.scss'

interface IWeeklyFeatured {
  weeklyVideos: IVideo[]
  randomVideo: IVideo
}

const WeeklyFeatured: FC<IWeeklyFeatured> = ({ weeklyVideos, randomVideo }) => {
  return (
    <div className={styles.weekly_featured}>
      <div className={styles.info_wf}>
        <div className={styles.sub_name}>Weekly Featured</div>
        <h1>Hello, Summer Vacation!</h1>
        <div className={styles.descriprion}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          harum placeat ullam vel non, quisquam totam, doloremque expedita odit
          consectetur minima vitae. Facilis nostrum cumque illum fugit rem, nam
          consectetur!
        </div>
        <Slider videos={weeklyVideos} />
      </div>

      <div className={styles.top_video}>
        <VideoItem item={randomVideo} size='large' hasAvatar />
      </div>
    </div>
  )
}

export default WeeklyFeatured
