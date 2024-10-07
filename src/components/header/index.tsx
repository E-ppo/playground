import React from 'react'
import NavList from './NavList'
import Logo from './Logo'
import styles from './header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <NavList />
    </header>
  )
}

export default Header
