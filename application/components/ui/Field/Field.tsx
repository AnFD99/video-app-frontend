import React, { FC, PropsWithChildren, forwardRef } from 'react'

import { IField } from './Field.interface'
import styles from './Field.module.scss'

const Field: FC<PropsWithChildren<IField>> = forwardRef<
  HTMLInputElement,
  IField
>(({ placeholder, error, type = 'text', style, ...props }, ref) => {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        ref={ref}
        type={type}
        placeholder={placeholder}
        {...props}
      />
      {error && <div className={styles.error}>{error.message}</div>}
    </div>
  )
})

Field.displayName = 'Field'

export default Field
