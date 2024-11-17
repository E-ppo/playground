import { Modal } from '@/components/modal'
import React from 'react'
import LoginForm from './LoginForm'

const LoginModal = () => {
  return (
    <Modal>
      <Modal.Trigger>
        <button className="btn">Login</button>
      </Modal.Trigger>
      <Modal.Content>
        <LoginForm />
      </Modal.Content>
    </Modal>
  )
}

export default LoginModal
