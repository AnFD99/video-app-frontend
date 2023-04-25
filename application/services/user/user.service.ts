import { axiosClassic, instanceAPI } from 'api/api'
import { IUser, IUserDetails } from 'types/user.interface'

export const UserService = {
  async getProfile() {
    const response = await instanceAPI.get<IUser>('/user/profile')

    return response
  },

  async getMostPopular() {
    const response = await axiosClassic.get<IUser[]>('user/most-popular/')

    return response
  },

  async updateProfile(data: IUserDetails) {
    const response = await instanceAPI.put<IUser>('/user/profile', data)

    return response
  }
}
