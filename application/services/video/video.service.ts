import { axiosClassic, instanceAPI } from 'api/api'
import { IVideo, IVideoDetails } from 'types/video.interface'

export const VideoService = {
  async getVideoById(id: string) {
    const response = await axiosClassic.get<IVideo>(`/video/${id}`)

    return response
  },

  async getMostPopular() {
    const response = await axiosClassic.get<IVideo[]>('/video/most-popular')

    return response
  },

  async getAll(searchTerm?: string) {
    const response = await axiosClassic.get<IVideo[]>(`/video`, {
      params: searchTerm
        ? {
            searchTerm
          }
        : []
    })

    return response
  },

  async getVideosByUser(userId: string) {
    const response = await instanceAPI.get<IVideo[]>(`/video/by-user/${userId}`)

    return response
  },

  async getVideosPrivateByUser() {
    const response = await instanceAPI.get<IVideo[]>('/video/private')

    return response
  },

  async getVideoPrivateById(id: string) {
    const response = await instanceAPI.get<IVideo>(`/video/private/${id}`)

    return response
  },

  async createVideo() {
    const response = await instanceAPI.post<string>(`/video`)

    return response
  },

  async updateVideo(id: string, body: IVideoDetails) {
    const response = await instanceAPI.put<IVideo>(`/video/${id}`, body)

    return response
  },

  async updateViews(id: string) {
    const response = await instanceAPI.put<IVideo>(`/video/update-views/${id}`)

    return response
  },

  async updateLikes(id: string, type = 'inc') {
    const response = await instanceAPI.put<IVideo>(
      `/video/update-likes/${id}?type=${type}`
    )

    return response
  },

  async deleteVideo(id: string) {
    const response = await instanceAPI.delete(`/video/${id}`)

    return response
  }
}
