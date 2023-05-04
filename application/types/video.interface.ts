import { IUser } from './user.interface'

export interface IVideo {
  _id: string
  name: string
  description: string
  videoPath: string
  thumbnailPath: string
  likes: number
  views: number
  isPublic: boolean
  createdAt: string
  updatedAt: string
  user?: IUser
}

export interface IVideoDetails
  extends Pick<
    IVideo,
    'videoPath' | 'thumbnailPath' | 'name' | 'description' | 'isPublic'
  > {}
