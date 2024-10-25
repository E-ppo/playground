import React, { HTMLAttributes } from 'react'
import styles from './header.module.scss'

const Header = ({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLElement>) => {
  return (
    <header className={`${styles.header} ${className || ''}`} {...rest}>
      {children}
    </header>
  )
}

export default Header
