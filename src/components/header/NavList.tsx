import React from 'react'
import Link from 'next/link'

import styles from './header.module.scss'

const NavList = () => {
  const navListItem = [
    { title: 'About', router: '/about' },
    { title: 'Portfolio', router: '/portfolio' },
    { title: 'Blog', router: '/blog' },
  ]
  return (
    <nav className={styles.nav}>
      {navListItem.map((item, index) => (
        <Link
          href={item.router}
          key={`${item.title}_${index}`}
          className={styles['nav-font']}
          data-hover={item.title}
        >
          <span className={styles.text}>{item.title}</span>
        </Link>
      ))}
    </nav>
  )
}

export default NavList
