import React from 'react'
import Logo from './Logo'
import NavList from '@/components/navList'
import { navListItem } from '@/constants/header'
import Login from './login'

const HeaderComponent = () => {
  return (
    <>
      <Logo />
      <div style={{ display: 'flex', alignItems: 'center', gap: 26 }}>
        <NavList list={navListItem} />
        <Login />
      </div>
    </>
  )
}

export default HeaderComponent
