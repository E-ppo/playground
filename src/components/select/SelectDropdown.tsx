'use client'

import styles from './select.module.scss'
import { useSelectContext } from './SelectContext'
import SelectOption from './SelectOption'

const SelectDropdown = () => {
  const { isOpen, options } = useSelectContext()

  if (!isOpen) return null

  return (
    <div className={styles.dropdown}>
      {options.map((option) => (
        <SelectOption key={option.value} option={option} />
      ))}
    </div>
  )
}

export default SelectDropdown
