import { FC, useState } from 'react'
import { BiPlusCircle } from 'react-icons/bi'

import UploadModal from './UploadModal'
import styles from './UploadVideo.module.scss'

const UploadVideo: FC = ({}) => {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button className={styles.button} onClick={() => setIsOpen(true)}>
        <BiPlusCircle fill='#CD3A42' />
      </button>
      <UploadModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default UploadVideo
