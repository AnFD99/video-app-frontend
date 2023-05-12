import { FC, useRef } from 'react'

import styles from './VideoItem.module.scss'

const VideoDuration: FC<{ videoPath: string }> = ({ videoPath }) => {
  // todo перезаписать время в useState, чтобы при перезагрузке быстро подгружалось
  const ref = useRef<HTMLVideoElement>(null)
  const duration = ref.current?.duration || 0

  return (
    <>
      <video className='hidden' ref={ref}>
        <source src={videoPath} type='video/mp4' />
      </video>
      <time className={styles.time}>
        {Math.floor(duration / 60) +
          ':' +
          ('0' + Math.floor(duration % 60)).slice(-2)}
      </time>
    </>
  )
}

export default VideoDuration
