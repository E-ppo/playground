'use client'

import { useState } from 'react'
import { ModalContext } from './modal-context'

import type { ModalCommonProps } from './types'
import Trigger from './modal-trigger'
import Content from './modal-content'
import Header from '../header'
import { CloseButton, Title } from './modal-header'

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

Modal.Trigger = Trigger
Modal.Content = Content
Modal.Header = Header
Modal.Title = Title
Modal.CloseButton = CloseButton

export { Modal }
