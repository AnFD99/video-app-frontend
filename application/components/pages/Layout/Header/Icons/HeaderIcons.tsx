import React, { FC } from 'react'
import { BiPlusCircle } from 'react-icons/bi'

import { useAuth } from '@/hooks/useAuth'

import AuthForm from '../AuthForm/AuthForm'

import styles from './HeaderIcons.module.scss'

const HeaderIcons: FC = () => {
  const { user } = useAuth()

  return (
    <div className={styles.icons}>
      {!!user && (
        <button className={styles.button}>
          <BiPlusCircle fill='#CD3A42' />
        </button>
      )}
      {!user && <AuthForm />}
    </div>
  )
}

export default HeaderIcons
