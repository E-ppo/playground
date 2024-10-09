import React from 'react'
import Logo from './Logo'
import styles from './header.module.scss'
import NavList from '../navList'
import { navListItem } from '@/constants/header'

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <NavList list={navListItem} />
    </header>
  )
}

export default Header
