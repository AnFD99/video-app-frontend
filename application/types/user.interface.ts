export interface IUser {
  _id: string
  email: string
  name: string
  avatarPath: string
  bannerPath: string
  description: string
  location: string
  subscribersCount: number
  createdAt: string
  updatedAt: string
  videosCount?: number
}

export interface IUserDetails
  extends Pick<
    IUser,
    'email' | 'name' | 'description' | 'location' | 'avatarPath' | 'bannerPath'
  > {}
