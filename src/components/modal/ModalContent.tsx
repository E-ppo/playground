'use client'

import styles from './modal.module.scss'
import { useModal } from './ModalContext'
import ModalPortal from './ModalPortal'
import type { ModalCommonProps } from './types'

const ModalContent = ({ children }: ModalCommonProps) => {
  const { isOpen, onClose } = useModal()

  if (!isOpen) return null

  return (
    <ModalPortal>
      <div className={styles.wrapper}>
        <div className={styles.overlay} onClick={onClose} aria-hidden="true" />
        <div className={styles.container}>{children}</div>
      </div>
    </ModalPortal>
  )
}
export default ModalContent
