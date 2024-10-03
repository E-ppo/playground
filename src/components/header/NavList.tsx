import React from 'react'
import Link from 'next/link'
import styles from './header.module.scss'

const NavList = () => {
  const navListItem = [
    { title: 'Home', router: '/' },
    { title: 'About', router: '/about' },
    { title: 'Portfolio', router: '/portfolio' },
    { title: 'Blog', router: '/blog' },
  ]
  return (
    <div className={styles.nav}>
      {navListItem.map((item, index) => (
        <Link
          href={item.router}
          className={styles[`nav-font`]}
          key={`${item}_${index}`}
        >
          {item.title}
        </Link>
      ))}
    </div>
  )
}

export default NavList
