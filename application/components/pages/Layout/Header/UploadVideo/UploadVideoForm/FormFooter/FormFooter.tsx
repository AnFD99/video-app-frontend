import cn from 'classnames'
import { FC } from 'react'
import { BiCheckCircle, BiUpload } from 'react-icons/bi'

import Button from '@/components/ui/Button/Button'

import styles from './FormFooter.module.scss'

const FormFooter: FC = ({}) => {
  const isUploaded = false

  return (
    <div className={styles.footer}>
      <div
        className={cn(styles.statusBar, {
          [styles.uploaded]: isUploaded
        })}
      >
        <BiUpload className={styles.icon__upload} />
        <BiCheckCircle className={styles.icon__check} />
        <span>{isUploaded ? `Video is uploaded` : `Uploading ${4}%...`}</span>
      </div>
      <Button>Save</Button>
    </div>
  )
}

export default FormFooter
