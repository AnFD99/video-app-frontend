import { IVideo } from '@/types/video.interface'

export interface IVideoItem {
  item: IVideo
  size?: 'normal' | 'large'
  hasAvatar?: boolean
}
