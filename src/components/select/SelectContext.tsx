'use client'

import { createContext, useContext } from 'react'
import { SelectContextType } from './types'

const SelectContext = createContext<SelectContextType | undefined>(undefined)

export const useSelectContext = () => {
  const context = useContext(SelectContext)
  if (!context) {
    throw new Error('Select components must be used within a SelectProvider')
  }
  return context
}

export default SelectContext
