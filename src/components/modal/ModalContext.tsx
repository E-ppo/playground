'use client'

import { createContext, useContext } from 'react'
import type { ModalContextType } from './types'

export const ModalContext = createContext<ModalContextType | null>(null)

export const useModal = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('바깥에서 선언하지 마세오')
  }
  return context
}
