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

const ModalCloseButton = ({ children }: ModalCommonProps) => {
  const { onClose } = useModal()
  return (
    <div onClick={onClose} aria-label="Close modal">
      {children}
    </div>
  )
}

export default ModalHeader
export { ModalTitle, ModalCloseButton }
