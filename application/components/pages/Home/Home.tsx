import { FC } from 'react'

import Line from '../../ui/Line/Line'
import Layout from '../Layout/Layout'
import Rightside from '../Layout/Rightside/Rightside'

import NewestVideo from './NewestVideo/NewestVideo'
import WeeklyFeatured from './WeeklyFeatured/WeeklyFeatured'
import { IHome } from './home.interface'

const Home: FC<IHome> = (props) => {
  return (
    <Layout title='Video App - Best video'>
      <div id='wrapper_content'>
        <div className='left_side'>
          <WeeklyFeatured
            weeklyVideos={props.weeklyVideos}
            randomVideo={props.randomVideo}
          />
          <Line />
          <NewestVideo newVideos={props.newVideos} />
        </div>
        <Rightside topChannels={props.topChannels} topVideo={props.topVideo} />
      </div>
    </Layout>
  )
}

export default Home
