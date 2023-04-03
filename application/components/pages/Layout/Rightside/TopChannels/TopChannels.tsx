import React, { FC } from 'react'
import { GoKebabVertical } from 'react-icons/go'

import avatarImg from '../../../../../assets/img/main/avatar.jpg'

const TopChannels: FC = () => {
  return (
    <div id='top_channels'>
      <div className='title_gray'>
        <h2>Top Channels</h2>
        <div className='showmore'>Show More</div>
      </div>

      <div className='list_channels'>
        <div className='channel'>
          <div className='info_left'>
            <img src={avatarImg.src} alt='' />
            <div className='info'>
              <div className='name'>LEGO</div>
              <div className='subs'>6.2M Subscribers</div>
            </div>
          </div>
          <a href='#' className='mnu'>
            <GoKebabVertical />
          </a>
        </div>

        <div className='channel'>
          <div className='info_left'>
            <img src={avatarImg.src} alt='' />
            <div className='info'>
              <div className='name'>LEGO</div>
              <div className='subs'>6.2M Subscribers</div>
            </div>
          </div>
          <a href='#' className='mnu'>
            <GoKebabVertical />
          </a>
        </div>

        <div className='channel'>
          <div className='info_left'>
            <img src={avatarImg.src} alt='' />
            <div className='info'>
              <div className='name'>LEGO</div>
              <div className='subs'>6.2M Subscribers</div>
            </div>
          </div>
          <a href='#' className='mnu'>
            <GoKebabVertical />
          </a>
        </div>

        <div className='channel'>
          <div className='info_left'>
            <img src={avatarImg.src} alt='' />
            <div className='info'>
              <div className='name'>LEGO</div>
              <div className='subs'>6.2M Subscribers</div>
            </div>
          </div>
          <a href='#' className='mnu'>
            <GoKebabVertical />
          </a>
        </div>

        <div className='channel'>
          <div className='info_left'>
            <img src={avatarImg.src} alt='' />
            <div className='info'>
              <div className='name'>LEGO</div>
              <div className='subs'>6.2M Subscribers</div>
            </div>
          </div>
          <a href='#' className='mnu'>
            <GoKebabVertical />
          </a>
        </div>

        <div className='channel'>
          <div className='info_left'>
            <img src={avatarImg.src} alt='' />
            <div className='info'>
              <div className='name'>LEGO</div>
              <div className='subs'>6.2M Subscribers</div>
            </div>
          </div>
          <a href='#' className='mnu'>
            <GoKebabVertical />
          </a>
        </div>
      </div>
    </div>
  )
}

export default TopChannels
