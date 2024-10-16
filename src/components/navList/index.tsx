import React from 'react'
import Link from 'next/link'
import styles from './nav-list.module.scss'
import { usePathname } from 'next/navigation'

interface Props {
  list: readonly { title: string; router: string }[]
  variant?: 'dynamic-circle' | 'tab-bar'
}

const NavList = ({ list, variant = 'dynamic-circle' }: Props) => {
  return (
    <nav className={styles[variant]}>
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
