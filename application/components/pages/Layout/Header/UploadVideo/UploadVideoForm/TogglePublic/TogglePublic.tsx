import { Switch } from '@headlessui/react'
import cn from 'classnames'
import { FC, useState } from 'react'

import styles from './TogglePublic.module.scss'
import { ITogglePublic } from './toggle-public.interface'

const TogglePublic: FC<ITogglePublic> = ({isEnabled, clickHandler}) => {

  return (
    <div className={styles.toggle__container}>
      <Switch
        checked={isEnabled}
        onChange={clickHandler}
        className={cn(styles.switch, {
          'bg-primary': isEnabled,
          'bg-slate-400': !isEnabled
        })}
      >
        <span
          className={cn(styles.switcher, {
            'translate-x-6': isEnabled,
            'translate-x-1': !isEnabled
          })}
        />
      </Switch>
      <span>Опубликовать видео</span>
    </div>
  )
}

export default TogglePublic
