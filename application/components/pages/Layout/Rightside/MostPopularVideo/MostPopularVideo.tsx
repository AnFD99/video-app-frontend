import React, { FC } from 'react'

import avatarImg from '../../../../../assets/img/main/avatar.jpg'
import liveImg from '../../../../../assets/img/main/live.jpg'

const MostPopularVideo: FC = () => {
  return (
    <div id='live'>
      <div className='title_gray'>
        <h2>Live</h2>
        <div className='showmore'>Show More</div>
      </div>

      <div className='video_item video_live_item'>
        <div className='thumbnail'>
          <img src={liveImg.src} alt='' />
          <div className='live'>Live</div>
          <div className='avatar'>
            <img src={avatarImg.src} alt='' />
          </div>
        </div>
        <div className='author'>Warren Munoz</div>
        <div className='name'>Lake House Vacation! Boating, Tubing & More!</div>
        <div className='descr'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ipsa
          voluptate, natus. Iure vitae dolores suscipit, commodi debitis aut
          culpa sapiente architecto exercitationem. Ullam laudantium ea hic
          inventore. Rem, alias.
        </div>
        <div className='number_info'>
          <div className='views'>VIEWS 29.2K</div>
          <div className='comments'>COMMENTS 5.8K</div>
        </div>
      </div>
    </div>
  )
}

export default MostPopularVideo
