import Link from 'next/link'
import { FC } from 'react'

import styles from './VideoInfo.module.scss'
import VideoInfoItem from './VideoInfoItem'

const VideoInfo: FC = ({}) => {
  return (
    <div className={styles.info}>
      <div className={styles.thumbnail}>
        Uploading video...
      </div>
      <div className={styles.details}>
        <VideoInfoItem title='Video Link'>
          <Link href={`/`}>{'/'}</Link>
        </VideoInfoItem>
        <VideoInfoItem title='Filename'>
          <span>{'fhsdjf'}</span>
        </VideoInfoItem>
      </div>
    </div>
  )
}

export default VideoInfo
