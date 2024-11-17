import { ReactNode } from 'react'

export interface ModalContextType {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export interface ModalCommonProps {
  children: ReactNode
}
