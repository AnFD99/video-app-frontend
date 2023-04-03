import cn from 'classnames'
import React, { FC, PropsWithChildren } from 'react'

import { IButton } from './Button.interface'
import styles from './Button.module.scss'

const Button: FC<PropsWithChildren<IButton>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button className={cn(styles.button, className)} {...props}>
      {children}
    </button>
  )
}

export default Button
