import shuffle from 'lodash/shuffle'
import type { GetStaticProps, NextPage } from 'next'

import Home from '@/components/pages/Home/Home'
import { IHome } from '@/components/pages/Home/home.interface'

import { UserService } from '@/services/user/user.service'
import { VideoService } from '@/services/video/video.service'

const HomePage: NextPage<IHome> = (props) => {
  return <Home {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: newVideos } = await VideoService.getAll()
    const { data: topChannels } = await UserService.getMostPopular()
    const topVideo = await VideoService.getMostPopular().then(
      ({ data }) => data[0]
    )

    return {
      props: {
        newVideos: newVideos.slice(0, 20),
        weeklyVideos: shuffle(newVideos).slice(0, 5),
        topVideo,
        randomVideo: shuffle(newVideos)[0],
        topChannels: topChannels.slice(0, 10)
      },
      revalidate: 60
    }
  } catch (e) {
    return {
      props: {
        newVideos: [],
        weeklyVideos: [],
        topVideo: {},
        randomVideo: {},
        topChannels: []
      }
    }
  }
}

export default HomePage
