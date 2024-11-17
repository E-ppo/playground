'use client'

import { cloneElement } from 'react'
import { useModal } from './modal-context'
import { ModalCommonProps } from './types'

const Trigger = ({ children }: ModalCommonProps) => {
  const { onOpen } = useModal()
  return cloneElement(children as React.ReactElement, { onClick: onOpen })
}

export default Trigger
