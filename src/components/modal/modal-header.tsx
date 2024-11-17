'use client'
import styles from './modal.module.scss'
import { useModal } from './modal-context'
import type { ModalCommonProps } from './types'

const Header = ({ children }: ModalCommonProps) => {
  return <div className={styles.header}>{children}</div>
}

const Title = ({ children }: ModalCommonProps) => {
  return <h2 className={styles.title}>{children}</h2>
}

const CloseButton = () => {
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

export default Header
export { CloseButton, Title }
