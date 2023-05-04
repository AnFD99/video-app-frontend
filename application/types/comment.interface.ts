import { IUser } from './user.interface'
import { IVideo } from './video.interface'

export interface IComment {
  _id: string
  message: string
  user: IUser
  video: IVideo
  createdAt: string
  updatedAt: string
}

export interface ICommentDetails extends Pick<IComment, 'message'> {
  videoId: string
}
