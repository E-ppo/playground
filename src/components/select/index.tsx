'use client'

import React, { useState, useRef, useEffect } from 'react'
import styles from './select.module.scss'
import SelectContext from './SelectContext'
import SelectTrigger from './SelectTrigger'
import SelectDropdown from './SelectDropdown'
import { SelectProps } from './types'

const Select = ({
  options,
  value,
  onChange,
  placeholder = 'Select...',
  className = '',
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setIsOpen(!isOpen)
    } else if (e.key === 'Escape') {
      setIsOpen(false)
    } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault()
      if (!isOpen) {
        setIsOpen(true)
        return
      }

      const currentIndex = options.findIndex((option) => option.value === value)
      if (currentIndex === -1) return

      const nextIndex =
        e.key === 'ArrowDown'
          ? (currentIndex + 1) % options.length
          : (currentIndex - 1 + options.length) % options.length

      onChange(options[nextIndex].value)
    }
  }

  return (
    <SelectContext.Provider
      value={{
        isOpen,
        setIsOpen,
        selectedValue: value,
        onChange,
        options,
      }}
    >
      <div
        ref={selectRef}
        className={`${styles.selectContainer} ${className}`}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <SelectTrigger placeholder={placeholder} />
        <SelectDropdown />
      </div>
    </SelectContext.Provider>
  )
}

export default Select
