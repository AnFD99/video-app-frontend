import { Dialog, Transition } from '@headlessui/react'
import { FC, Fragment } from 'react'
import { MdClose } from 'react-icons/md'

import styles from './UploadVideo.module.scss'
import UploadVideoForm from './UploadVideoForm/UploadVideoForm'
import { IModal } from './upload-video.interface'

const UploadModal: FC<IModal> = ({ isOpen, setIsOpen }) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={() => setIsOpen(false)} className={styles.modal__dialog}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className={styles.overlay} aria-hidden='true' />
        </Transition.Child>

        <div className={styles.modal__container}>
          <div className={styles.modal__scroll}>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className={styles.modal__panel}>
                <MdClose
                  className={styles.modal__close}
                  onClick={() => setIsOpen(false)}
                />
                <UploadVideoForm />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default UploadModal
