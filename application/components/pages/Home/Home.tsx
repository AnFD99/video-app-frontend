import { FC, PropsWithChildren } from 'react'
import WeeklyFeatured from './WeeklyFeatured/WeeklyFeatured'
import Line from '../../ui/Line'
import Recommended from './Recommended/Recommended'
import Rightside from '../Layout/Rightside/Rightside'
import Layout from '../Layout/Layout'
import { useAuth } from '../../../hooks/useAuth'

const Home: FC<PropsWithChildren<unknown>> = () => {
  const { user } = useAuth()

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
