'use client'

import SvgIcon from '../SvgIcon'
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

      <SvgIcon
        name="statMinus"
        color="#876370"
        style={{ transform: isOpen ? 'scaleY(-1)' : 'scaleY(1)' }}
      />
    </div>
  )
}

export default SelectTrigger
