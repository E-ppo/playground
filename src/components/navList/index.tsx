import React from 'react'
import Link from 'next/link'
import styles from './nav-list.module.scss'

interface Props {
  list: readonly { title: string; router: string }[]
}

const NavList = ({ list }: Props) => {
  return (
    <nav className={styles.nav}>
      {list.map((item, index) => (
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
