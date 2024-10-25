import React from 'react'
import Link from 'next/link'
import './HeaderComponent'
import './style.scss'

const Logo = () => {
  return (
    <Link href={'/'} className="logo">
      <p>Eppo Playgroud</p>
    </Link>
  )
}

export default Logo
