import { FC, PropsWithChildren } from 'react'

import styles from './VideoInfo.module.scss'

interface OwnProps {
  title: string
}

const VideoInfoItem: FC<PropsWithChildren<OwnProps>> = ({
  title,
  children
}) => {
  return (
    <div className={styles.info__text}>
      <span className={styles.info__title}>{title}</span>
      {children}
    </div>
  )
}

export default VideoInfoItem
