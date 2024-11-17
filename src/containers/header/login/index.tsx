'use client'
import React from 'react'
import LoginModal from './LoginModal'
import { useAuth } from '@/hooks'
import LogOutModal from './LogoutModal'

const Login = () => {
  const { user } = useAuth()

  return <>{!user ? <LoginModal /> : <LogOutModal />}</>
}

export default Login
