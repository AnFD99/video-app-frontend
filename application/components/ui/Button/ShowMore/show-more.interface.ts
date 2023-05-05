import { ButtonHTMLAttributes } from 'react'

export interface IShowMoreButton
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  path?: string
}
