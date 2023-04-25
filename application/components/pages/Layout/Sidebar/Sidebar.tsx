import Link from 'next/link'
import React, { FC, PropsWithChildren } from 'react'

import Button from '@/components/ui/Button/Button'
import Line from '@/components/ui/Line/Line'

import { authInitialState } from '@/providers/AuthProvider'

import { AuthService } from '@/services/auth/auth.service'

import logoImg from '@/assets/img/common/logo3.svg'

import { useAuth } from '@/hooks/useAuth'

import Menu from './Menu/Menu'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Sidebar: FC<PropsWithChildren> = () => {
  const { user, setData } = useAuth()

  return user ? (
    <section className='sidebar'>
      <Link href='/' className='logo'>
        <img
          src={logoImg.src}
          alt='Youtube'
          // width={130}
          // height={42}
        />
      </Link>
      <ProfileInfo />
      <Line />
      <Menu />
      <div className='switch_wrapper'>
        <label className='switch'>
          <input type='checkbox' defaultChecked />
          <span className='slider round'></span>
        </label>
        <p>Light On</p>
      </div>

      <Button
        onClick={() => {
          AuthService.logout()
          setData && setData(authInitialState)
        }}
      >
        Logout
      </Button>
      <div className='copy'>© 2023 AnFD</div>
    </section>
  ) : null
}

export default Sidebar
