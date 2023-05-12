import { ChangeEvent, useState } from 'react'
import { useQuery } from 'react-query'

import { VideoService } from '@/services/video/video.service'

import { useDebounce } from './useDebounce'

export const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const debounceSearch = useDebounce(searchTerm, 500)

  const { data, isSuccess } = useQuery(
    ['serach videos', debounceSearch],
    () => VideoService.getAll(debounceSearch),
    {
      select: ({ data }) => data.slice(0, 4),
      enabled: !!debounceSearch
    }
  )

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  return {
    handleSearch,
    isSuccess,
    data,
    searchTerm
  }
}
