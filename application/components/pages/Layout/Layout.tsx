import cn from 'classnames'
import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'

import { useAuth } from '@/hooks/useAuth'

import Header from './Header/Header'
import styles from './Layout.module.scss'
import Sidebar from './Sidebar/Sidebar'

const Layout: FC<PropsWithChildren<{ title: string }>> = ({
  children,
  title
}) => {
  const { user } = useAuth()

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.app__container}>
        <Sidebar />
        <section
          className={cn(styles.content, {
            [styles.content_full]: !user
          })}
        >
          <Header />

          {children}
        </section>
      </div>
    </>
  )
}

export default Layout
