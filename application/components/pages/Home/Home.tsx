import { FC, PropsWithChildren } from 'react'

import Line from '../../ui/Line'
import Layout from '../Layout/Layout'
import Rightside from '../Layout/Rightside/Rightside'

import Recommended from './Recommended/Recommended'
import WeeklyFeatured from './WeeklyFeatured/WeeklyFeatured'

const Home: FC<PropsWithChildren<unknown>> = () => {
  return (
    <Layout title='Video App - Best video'>
      <div id='wrapper_content'>
        <div className='left_side'>
          <WeeklyFeatured />
          <Line />
          <Recommended />
        </div>
        <Rightside />
      </div>
    </Layout>
  )
}

export default Home
