import React from 'react'
import Logo from './Logo'
import MyPageIcon from './MyPageIcon'
import NavList from '@/components/navList'
import { navListItem } from '@/constants/header'

const HeaderComponent = () => {
  return (
    <>
      <Logo />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <NavList list={navListItem} />
        <MyPageIcon />
      </div>
    </>
  )
}

export default HeaderComponent
