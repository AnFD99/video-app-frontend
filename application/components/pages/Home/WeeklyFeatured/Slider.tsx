import React, { FC } from 'react'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss/navigation'
import { IVideo } from 'types/video.interface'

import VideoItem from '@/components/ui/VideoItem/VideoItem'

import 'swiper/scss'

const Slider: FC<{ videos: IVideo[] }> = ({ videos }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={15}
      slidesPerView={2}
      autoplay={{
        delay: 5000,
        pauseOnMouseEnter: true
      }}
      speed={1000}
    >
      {videos.map((video) => (
        <SwiperSlide key={video._id}>
          <VideoItem item={video} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider
