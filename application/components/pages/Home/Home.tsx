import { FC, } from 'react'

import Line from '../../ui/Line/Line'
import Layout from '../Layout/Layout'
import Rightside from '../Layout/Rightside/Rightside'

import Recommended from './Recommended/Recommended'
import WeeklyFeatured from './WeeklyFeatured/WeeklyFeatured'
import { IHome } from './home.interface'

const Home: FC<IHome> = ({ weeklyVideos, randomVideo, newVideos }) => {

  return (
    <Layout title='Video App - Best video'>
      <div id='wrapper_content'>
        <div className='left_side'>
          <WeeklyFeatured weeklyVideos={weeklyVideos} randomVideo={randomVideo} />
          <Line />
          <Recommended />
        </div>
        <Rightside />
      </div>
    </Layout>
  )
}

export default Home
