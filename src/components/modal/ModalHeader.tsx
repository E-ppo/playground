'use client'
import styles from './modal.module.scss'
import { useModal } from './ModalContext'
import type { ModalCommonProps } from './types'

const ModalHeader = ({ children }: ModalCommonProps) => {
  return <div className={styles.header}>{children}</div>
}

const ModalTitle = ({ children }: ModalCommonProps) => {
  return <h2 className={styles.title}>{children}</h2>
}

const ModalCloseButton = () => {
  const { onClose } = useModal()
  return (
    <button
      onClick={onClose}
      className={styles.closeButton}
      aria-label="Close modal"
    >
      x
    </button>
  )
}

export default ModalHeader
export { ModalTitle, ModalCloseButton }
