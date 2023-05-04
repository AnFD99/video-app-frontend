import Image from 'next/image'
import React, { FC, PropsWithChildren } from 'react'
import { useQuery } from 'react-query'
import { formatNumber } from 'utils/formatNumber'

import FilesLoader from '@/components/ui/Loader/FilesLoader'

import { UserService } from '@/services/user/user.service'

import styles from './ProfileInfo.module.scss'

const ProfileInfo: FC<PropsWithChildren> = () => {
  const { data, isLoading } = useQuery(
    'get profile',
    () => UserService.getProfile(),
    { select: ({ data }) => data }
  )

  return isLoading ? (
    <FilesLoader count={5} />
  ) : (
    <>
      <div className={styles.profile__info}>
        <div className={styles.avatar}>
          <Image
            className={styles.avatar__img}
            src={data?.avatarPath || ''}
            alt=''
            fill
            sizes=''
            quality={90}
          />
        </div>

        <div className={styles.name}>{data?.name}</div>
        <div className={styles.location}>{data?.location}</div>
      </div>

      <div className={styles.information}>
        <div className={styles.item}>
          <div className={styles.top}>{data?.videosCount || 0}</div>
          <div className={styles.bottom}>videos</div>
        </div>
        <div className={styles.item}>
          <div className={styles.top}>
            {formatNumber(data?.subscribersCount || 0)}
          </div>
          <div className={styles.bottom}>subscribers</div>
        </div>
      </div>
    </>
  )
}

export default ProfileInfo
