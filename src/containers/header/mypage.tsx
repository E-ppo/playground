'use client'
import { Modal } from '@/components/modal'
import { useModal } from '@/components/modal/modal-context'
import React, { useState } from 'react'

const Mypage = () => {
  return (
    <div>
      <Modal>
        <Modal.Trigger>
          <button className="btn">프로필 수정</button>
        </Modal.Trigger>
        <Modal.Content>
          <div></div>
        </Modal.Content>
      </Modal>
    </div>
  )
}

export default Mypage
