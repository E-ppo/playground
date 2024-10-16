'use client'
import React, { useMemo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './nav-list.module.scss'

interface NavItem {
  title: string
  router: string
}

interface Props {
  list: readonly NavItem[]
  variant?: 'dynamic-circle' | 'tab-bar'
  isActiveFunc?: (pathname: string, itemPath: string) => boolean
}

const defaultIsActive = (pathname: string, itemPath: string) => {
  // 정확히 일치하거나, 중첩 라우트의 시작 부분과 일치하는지 확인
  return pathname === itemPath || pathname.startsWith(`${itemPath}/`)
}

const NavList: React.FC<Props> = ({
  list,
  variant = 'dynamic-circle',
  isActiveFunc = defaultIsActive,
}) => {
  const pathname = usePathname()

  const navItems = useMemo(
    () =>
      list.map((item, index) => {
        const isActive = isActiveFunc(pathname, item.router)
        return (
          <Link
            href={item.router}
            key={`${item.title}_${index}`}
            className={`${styles['nav-font']} ${isActive ? styles.active : ''}`}
            data-hover={item.title}
          >
            <span className={styles.text}>{item.title}</span>
          </Link>
        )
      }),
    [list, pathname, isActiveFunc],
  )

  return <nav className={styles[variant]}>{navItems}</nav>
}

export default React.memo(NavList)
