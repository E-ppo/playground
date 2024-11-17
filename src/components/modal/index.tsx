'use client'

import { useState } from 'react'
import { ModalContext } from './ModalContext'

import type { ModalCommonProps } from './types'

import { ModalCloseButton, ModalTitle } from './ModalHeader'
import ModalTrigger from './ModalTrigger'
import ModalContent from './ModalContent'

const Modal = ({ children }: ModalCommonProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)

  return (
    <ModalContext.Provider value={{ isOpen, onOpen, onClose }}>
      {children}
    </ModalContext.Provider>
  )
}

Modal.Trigger = ModalTrigger
Modal.Content = ModalContent
Modal.Header = ModalContext
Modal.Title = ModalTitle
Modal.CloseButton = ModalCloseButton

export { Modal }
