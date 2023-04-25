export interface IAuthData {
  user: {
    _id: string
    email: string
  } | null
  accessToken: string
}
