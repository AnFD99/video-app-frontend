import React, { FC } from 'react'

import { useAuth } from '@/hooks/useAuth'

import AuthForm from '../AuthForm/AuthForm'
import UploadVideo from '../UploadVideo/UploadVideo'

import styles from './HeaderIcons.module.scss'

const HeaderIcons: FC = () => {
  const { user } = useAuth()

  return (
    <div className={styles.icons}>
      {!!user ? <UploadVideo /> : <AuthForm />}
    </div>
  )
}

export default HeaderIcons
