import { Modal } from '@/components/modal'
import React from 'react'
import styles from './mypage.module.scss'

const LogOutModal = () => {
  return (
    <Modal>
      <Modal.Trigger>
        <button className="btn">Logout</button>
      </Modal.Trigger>
      <Modal.Content>
        <div className={styles.logout}>로그아웃 할껀가여?</div>
        <div className={styles['logout__btn--wrapper']}>
          <button>로그아웃</button>
          <Modal.CloseButton>
            <button>취소</button>
          </Modal.CloseButton>
        </div>
      </Modal.Content>
    </Modal>
  )
}

export default LogOutModal
