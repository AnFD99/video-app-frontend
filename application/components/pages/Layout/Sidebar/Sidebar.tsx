import Image from 'next/image'
import Link from 'next/link'
import { FC, PropsWithChildren } from 'react'

import Button from '@/components/ui/Button/Button'
import Line from '@/components/ui/Line/Line'

import { authInitialState } from '@/providers/AuthProvider'

import { AuthService } from '@/services/auth/auth.service'

import logoImg from '@/assets/img/common/logo3.svg'

import { useAuth } from '@/hooks/useAuth'

import Menu from './Menu/Menu'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import styles from './Sidebar.module.scss'

const Sidebar: FC<PropsWithChildren> = () => {
  const { user, setData } = useAuth()

  return user ? (
    <section className={styles.sidebar}>
      <Link href='/' className={styles.logo}>
        <Image
          className={styles.logo__img}
          src={logoImg.src}
          alt=''
          width={130}
          height={42}
        />
      </Link>
      <ProfileInfo />
      <Line />
      <Menu />

      <Button
        onClick={() => {
          AuthService.logout()
          setData && setData(authInitialState)
        }}
      >
        Logout
      </Button>
      <div className={styles.copy}>© 2023 AnFD</div>
    </section>
  ) : null
}

export default Sidebar
