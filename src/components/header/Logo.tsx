import React from 'react'
import styles from './header.module.scss'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href={'/'} className={styles.logo}>
      <p>Eppo Playgroud</p>
    </Link>
  )
}

export default Logo
