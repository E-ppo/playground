'use client'
import { Modal } from '@/components/modal'
import React, { useState } from 'react'
import LoginForm from './LoginForm'

const Mypage = () => {
  return (
    <div>
      <Modal>
        <Modal.Trigger>
          <button className="btn">Login</button>
        </Modal.Trigger>
        <Modal.Content>
          <LoginForm />
        </Modal.Content>
      </Modal>
    </div>
  )
}

export default Mypage
