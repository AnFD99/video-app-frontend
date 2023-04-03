export interface IAuthFields {
  email: string
  password: string
}

export const validEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
