import React, { FC } from 'react'

import avatarImg from '../../../../assets/img/main/avatar.jpg'
import thumbnailImg1 from '../../../../assets/img/main/1.jpg'
import thumbnailImg2 from '../../../../assets/img/main/2.jpg'
import thumbnailImg3 from '../../../../assets/img/main/3.jpg'

const WeeklyFeatured: FC = () => {
  return (
    <div className='weekly_featured'>
      <div className='info_wf'>
        <div className='sub_name'>Weekly Featured</div>
        <h1>Hello, Summer Vacation!</h1>
        <div className='descr'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          harum placeat ullam vel non, quisquam totam, doloremque expedita odit
          consectetur minima vitae. Facilis nostrum cumque illum fugit rem, nam
          consectetur!
        </div>
        <div className='slider_wf'>
          <div className='video_item'>
            <div className='thumbnail'>
              <img src={thumbnailImg1.src} alt='' width={480} height={320} />
              <time>16:55</time>
            </div>
            <div className='author'>Micheal Adams</div>
            <div className='name'>Day in my life: Summer ...</div>
            <div className='number_info'>
              <div className='views'>VIEWS 28.6K</div>
              <div className='date'>6DS AGO</div>
            </div>
          </div>

          <div className='video_item'>
            <div className='thumbnail'>
              <img src={thumbnailImg2.src} alt='' width={480} height={320} />
              <time>07:23</time>
            </div>
            <div className='author'>Dollie Cross</div>
            <div className='name'>Day in my life: Summer ...</div>
            <div className='number_info'>
              <div className='views'>VIEWS 26.7K</div>
              <div className='date'>10DS AGO</div>
            </div>
          </div>

          <div className='video_item'>
            <div className='thumbnail'>
              <img src={thumbnailImg3.src} alt='' width={480} height={320} />
              <time>16:55</time>
            </div>
            <div className='author'>Micheal Adams</div>
            <div className='name'>Day in my life: Summer ...</div>
            <div className='number_info'>
              <div className='views'>VIEWS 28.6K</div>
              <div className='date'>6DS AGO</div>
            </div>
          </div>
        </div>
      </div>

      <div className='top_video'>
        <div className='video_item'>
          <div className='thumbnail'>
            <img src={thumbnailImg3.src} alt='' width={480} height={320} />
            <time>28:32</time>
            <div className='avatar'>
              <img src={avatarImg.src} alt='' width={70} height={70} />
            </div>
          </div>
          <div className='author'>Warren Munoz</div>
          <div className='name'>
            Lake House Vacation! Boating, Tubing & More!
          </div>
          <div className='descr'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
            animi aut vel alias voluptate, odio. Tempora sequi et itaque enim a,
            aut excepturi adipisci quam, aspernatur, eaque obcaecati dolor
            tenetur
          </div>
          <div className='number_info'>
            <div className='views'>VIEWS 29.2K</div>
            <div className='likes'>LIKES 1.6K</div>
            <div className='date'>3DS AGO</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeeklyFeatured