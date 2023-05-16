import React, { FC, forwardRef } from 'react'

import { ITextarea } from './Textarea.interface'
import styles from './Textarea.module.scss'

const Textarea: FC<ITextarea> = forwardRef<HTMLTextAreaElement, ITextarea>(
  ({ placeholder, error, style, ...props }, ref) => {
    return (
      <div className={styles.wrapper}>
        <textarea
          className={styles.textarea}
          ref={ref}
          placeholder={placeholder}
          {...props}
        />
        {error && <div className={styles.error}>{error.message}</div>}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export default Textarea
