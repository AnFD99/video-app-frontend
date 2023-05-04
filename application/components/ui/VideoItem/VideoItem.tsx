import cn from 'classnames'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { formatNumber } from 'utils/formatNumber'

import VideoDuration from './VideoDuration'
import styles from './VideoItem.module.scss'
import { IVideoItem } from './video-item.interface'

dayjs.extend(relativeTime)

const VideoItem: FC<IVideoItem> = ({
  item,
  size = 'normal',
  hasAvatar = false
}) => {
  return (
    <div className={styles.videoItem}>
      <Link href={`/v/${item._id}`}>
        <div
          className={cn(styles.thumbnail, {
            [styles.thumbnail_big]: size === 'large'
          })}
        >
          <Image
            className={styles.thumbnail__img}
            src={item.thumbnailPath}
            alt={item.name}
            fill
            sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"'
            priority
          />
          <VideoDuration videoPath={item.videoPath} />
          {hasAvatar && (
            <div className={styles.avatar}>
              <Image
                className={styles.avatar__img}
                src={item.user?.avatarPath || ''}
                alt={item.user?.name || ''}
                width={40}
                height={40}
                quality={90}
              />
            </div>
          )}
        </div>
        <div className={styles.author}>{item.user?.name}</div>
        <div className={styles.name}>{item.name}</div>
      </Link>
      {size === 'large' && (
        <div className={styles.description}>{item.description}</div>
      )}
      <div className={styles.number__info}>
        <div className={styles.views}>VIEWS {formatNumber(item.views)}</div>
        {size === 'large' && (
          <div className={styles.likes}>LIKES {formatNumber(item.likes)}</div>
        )}
        <div className={styles.date}>
          {dayjs(new Date(item.createdAt)).fromNow()}
        </div>
      </div>
    </div>
  )
}

export default VideoItem
