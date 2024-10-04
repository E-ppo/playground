'use client'
import React from 'react'
import styles from './chip.module.scss'

interface Props {
  children: string
  onClick?: () => void
}

const Chip = ({ children, onClick }: Props) => (
  <span
    className={styles.chip}
    onClick={onClick}
    role={onClick ? 'button' : undefined}
  >
    {children}
  </span>
)

export default Chip
