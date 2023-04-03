import React, { FC, PropsWithChildren, forwardRef } from 'react';



import { IField } from './Field.interface';
import styles from './Field.module.scss';


const Field: FC<PropsWithChildren<IField>> = forwardRef<
  HTMLInputElement,
  IField
>(({ placeholder, error, type = 'text', style, ...props }, ref) => {
  return (
    <div className={styles.input}>
      <label>
        <input ref={ref} type={type} placeholder={placeholder} {...props} />
      </label>
      {error && <div className={styles.error}>{error.message}</div>}
    </div>
  )
})

Field.displayName = 'Field'

export default Field