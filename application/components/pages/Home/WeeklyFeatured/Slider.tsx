import cn from 'classnames'
import React, { FC } from 'react'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss/navigation'

import thumbnailImg1 from '@/assets/img/main/1.jpg'
import thumbnailImg2 from '@/assets/img/main/2.jpg'
import thumbnailImg3 from '@/assets/img/main/3.jpg'

import styles from './Slider.module.scss'

import 'swiper/scss'

const Slider: FC = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={15}
      slidesPerView={2}
      className={styles.slider}
      autoplay={{
        delay: 5000,
        pauseOnMouseEnter: true
      }}
      speed={1000}
    >
      <SwiperSlide className={cn(styles.videoItem, 'video_item')}>
        <div className='thumbnail'>
          <img src={thumbnailImg1.src} alt='' width={480} height={320} />
          <time>16:55</time>
        </div>
        <div className='author'>Micheal Adams</div>
        <div className='name'>Day in my life: Summer ...</div>
        <div className={cn('number_info', styles.numberInfo)}>
          <div className='views'>VIEWS 28.6K</div>
          <div className='date'>6DS AGO</div>
        </div>
      </SwiperSlide>

      <SwiperSlide className={cn(styles.videoItem, 'video_item')}>
        <div className='thumbnail'>
          <img src={thumbnailImg2.src} alt='' width={480} height={320} />
          <time>07:23</time>
        </div>
        <div className='author'>Dollie Cross</div>
        <div className='name'>Day in my life: Summer ...</div>
        <div className={cn('number_info', styles.numberInfo)}>
          <div className='views'>VIEWS 26.7K</div>
          <div className='date'>10DS AGO</div>
        </div>
      </SwiperSlide>

      <SwiperSlide className={cn(styles.videoItem, 'video_item')}>
        <div className='thumbnail'>
          <img src={thumbnailImg3.src} alt='' width={480} height={320} />
          <time>16:55</time>
        </div>
        <div className='author'>Micheal Adams</div>
        <div className='name'>Day in my life: Summer ...</div>
        <div className={cn('number_info', styles.numberInfo)}>
          <div className='views'>VIEWS 28.6K</div>
          <div className='date'>6DS AGO</div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default Slider
