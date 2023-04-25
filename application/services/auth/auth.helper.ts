import Cookies from 'js-cookie'
import { IAuthData } from 'types/auth.interface'



export const saveTokensToStorage = (accessToken: string) => {
  Cookies.set('accessToken', accessToken)
}

export const removeTokensFromStorage = () => {
  Cookies.remove('accessToken')
}

export const saveToStorage = (data: IAuthData) => {
  saveTokensToStorage(data.accessToken)
  localStorage.setItem('user', JSON.stringify(data.user))
}
