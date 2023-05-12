import { FC } from 'react'
import { BiSearch } from 'react-icons/bi'
import { useQuery } from 'react-query'

import VideoItem from '@/components/ui/VideoItem/VideoItem'

import { VideoService } from '@/services/video/video.service'

import { useSearch } from '@/hooks/useSearch'

import styles from './Search.module.scss'

const Search: FC = ({}) => {
  const { handleSearch, isSuccess, data, searchTerm } = useSearch()

  return (
    <div className={styles.search_top}>
      <label>
        <input
          type='text'
          placeholder='Search videos...'
          value={searchTerm}
          onChange={handleSearch}
        />
        <BiSearch className={styles.icon} />
      </label>
      {isSuccess && (
        <div className={styles.result}>
			<div className={styles.result__items}>
          {data?.length ? (
            data.map((video) => <VideoItem item={video} key={video._id} />)
          ) : (
            <div>Videos not found</div>
          )}
			 </div>
        </div>
      )}
    </div>
  )
}

export default Search
