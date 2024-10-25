'use client'
import React from 'react'
import './style.scss'

interface Props {
  children: string
  onClick?: () => void
}

const Chip = ({ children, onClick }: Props) => (
  <span
    className="chip"
    onClick={onClick}
    role={onClick ? 'button' : undefined}
  >
    {children}
  </span>
)

export default Chip
