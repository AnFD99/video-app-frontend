import React, { FC } from 'react'

import Line from '../../../ui/Line/Line'

import MostPopularVideo from './MostPopularVideo/MostPopularVideo'
import TopChannels from './TopChannels/TopChannels'

const Rightside: FC = () => {
  return (
    <div className='right_side'>
      <MostPopularVideo />
      <Line />
      <TopChannels />
    </div>
  )
}

export default Rightside
