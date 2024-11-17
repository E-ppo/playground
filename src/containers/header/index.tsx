import React from 'react'
import Logo from './Logo'
import NavList from '@/components/navList'
import { navListItem } from '@/constants/header'
import Mypage from './mypage'

const HeaderComponent = () => {
  return (
    <>
      <Logo />
      <div style={{ display: 'flex', alignItems: 'center', gap: 26 }}>
        <NavList list={navListItem} />
        <Mypage />
      </div>
    </>
  )
}

export default HeaderComponent
