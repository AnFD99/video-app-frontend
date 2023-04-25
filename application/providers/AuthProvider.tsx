import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import React, {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useEffect,
  useState
} from 'react'
import { IAuthData } from 'types/auth.interface'

import { AuthService } from '@/services/auth/auth.service'

interface IContext extends IAuthData {
  setData: Dispatch<SetStateAction<IAuthData>> | null
}

export const AuthContext = createContext<IContext>({} as IContext)

export const authInitialState = {
  user: null,
  accessToken: ''
}

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [data, setData] = useState<IAuthData>(authInitialState)

  const { pathname } = useRouter()

  useEffect(() => {
    const accessToken = Cookies.get('accessToken')
    if (!accessToken && !data.user) {
      AuthService.logout()
      setData(authInitialState)
    }
  }, [pathname])

  useEffect(() => {
    const accessToken = Cookies.get('accessToken')
    if (accessToken) {
      const user = JSON.parse(localStorage.getItem('user') || '')
      setData({
        user,
        accessToken
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={{ ...data, setData }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
