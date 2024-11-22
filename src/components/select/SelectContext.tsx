'use client'

import { createContext, useContext } from 'react'
import { SelectContextType } from './types'

const SelectContext = createContext<SelectContextType | undefined>(undefined)

export const useSelectContext = () => {
  const context = useContext(SelectContext)
  if (!context) {
    throw new Error(
      '셀렉트 컴포넌트는 꼭 셀렉트 프로바이더 안에서만 사용해야함미다 ㅇ_ㅇ',
    )
  }
  return context
}

export default SelectContext
