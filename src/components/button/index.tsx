import React from 'react'
import Link from 'next/link'
import styles from './button.module.scss'

interface Props {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'large'
  href?: string
  disabled?: boolean
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => void
  text: string
}

const Button = ({
  href,
  onClick,
  disabled = false,
  variant = 'primary',
  size = 'md',
  text,
}: Props) => {
  const className = `${styles.button} ${styles[`button--${variant}`]} ${styles[`button--${size}`]}`

  if (href) {
    return (
      <Link href={href} passHref>
        <a className={className} onClick={onClick} role="button" tabIndex={0}>
          {text}
        </a>
      </Link>
    )
  }

  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {text}
    </button>
  )
}

export default Button
