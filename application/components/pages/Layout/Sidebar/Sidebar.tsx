import Link from 'next/link'
import React, { FC, PropsWithChildren } from 'react'
import {
  BiCalendar,
  BiCamera,
  BiGift,
  BiLike,
  BiSupport,
  BiTime
} from 'react-icons/bi'
import { HiOutlineAdjustments } from 'react-icons/hi'
import {
  MdLiveTv,
  MdOutlinePermMedia,
  MdOutlineSmartphone
} from 'react-icons/md'

import Button from '@/components/ui/Button/Button'

import { authInitialState } from '@/providers/AuthProvider'

import { AuthService } from '@/services/auth/auth.service'

import logoImg from '@/assets/img/common/logo3.svg'
import avatarImg from '@/assets/img/main/avatar.jpg'

import { useAuth } from '@/hooks/useAuth'

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
      <div className='profile_info'>
        <img
          src={avatarImg.src}
          alt=''
          // width={70}
          // height={70}
        />
        <div className='name'>Nannie Nelson</div>
        <div className='location'>Montreal, QC</div>
      </div>
      <div className='information'>
        <div className='item'>
          <div className='top'>278</div>
          <div className='bottom'>videos</div>
        </div>
        <div className='item'>
          <div className='top'>36.5k</div>
          <div className='bottom'>subscribers</div>
        </div>
      </div>
      <div className='line'></div>
      <ul className='mnu_sidebar'>
        <li>
          <a href='#'>
            <MdOutlinePermMedia />
            <b>Videos</b>
          </a>
        </li>
        <li>
          <a href='#'>
            <BiCamera />
            <b>Movies & Shows</b>
          </a>
        </li>
        <li>
          <a href='#'>
            <BiGift />
            <b>Premium Contents</b>
          </a>
        </li>
        <li>
          <a href='#'>
            <MdLiveTv />
            <b>Live</b>
          </a>
        </li>

        <div className='line_mnu'></div>

        <li>
          <a href='#'>
            <BiCalendar />
            <b>Subscribtions</b>
            <span className='number'>29 new</span>
          </a>
        </li>
        <li>
          <a href='#'>
            <MdOutlineSmartphone />
            <b>Library</b>
          </a>
        </li>
        <li>
          <a href='#'>
            <BiLike />
            <b>Liked Videos</b>
          </a>
        </li>
        <li>
          <a href='#'>
            <BiTime />
            <b>Watch Later</b>
          </a>
        </li>

        <div className='line_mnu'></div>

        <li>
          <a href='#'>
            <HiOutlineAdjustments />
            <b>Settings</b>
          </a>
        </li>
        <li>
          <a href='#'>
            <BiSupport />
            <b>Help & Report</b>
          </a>
        </li>
      </ul>

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
      <div className='copy'>© 2020 Youtube, LLC</div>
    </section>
  ) : null
}

export default Sidebar
