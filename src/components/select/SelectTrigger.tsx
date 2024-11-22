'use client'

import styles from './select.module.scss'
import { useSelectContext } from './SelectContext'

interface SelectTriggerProps {
  placeholder?: string
}

const SelectTrigger = ({ placeholder = 'Select...' }: SelectTriggerProps) => {
  const { isOpen, setIsOpen, selectedValue, options } = useSelectContext()
  const selectedOption = options.find(
    (option) => option.value === selectedValue,
  )

  return (
    <div
      className={`${styles.trigger} ${isOpen ? styles.open : ''}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className={styles.value}>
        {selectedOption ? selectedOption.label : placeholder}
      </span>
      <div>1</div>
    </div>
  )
}

export default SelectTrigger
