'use client'

import styles from './select.module.scss'
import { useSelectContext } from './SelectContext'
import { SelectOption as SelectOptionType } from './types'

interface SelectOptionProps {
  option: SelectOptionType
}

const SelectOption = ({ option }: SelectOptionProps) => {
  const { selectedValue, onChange, setIsOpen } = useSelectContext()

  return (
    <div
      className={`${styles.option} ${option.value === selectedValue ? styles.selected : ''}`}
      onClick={() => {
        onChange(option.value)
        setIsOpen(false)
      }}
    >
      {option.label}
    </div>
  )
}

export default SelectOption
