import React, { SetStateAction, useState } from 'react'
import Select from '../select'
import { CategoryTypes } from '@/types/editorTypes'
import styles from './editor.module.scss'

type topMenuTypes = { title: string; category: CategoryTypes }

interface Props {
  value: topMenuTypes
  setValue: React.Dispatch<SetStateAction<topMenuTypes>>
}

const TopMenu = ({ value, setValue }: Props) => {
  const categoryOption: { value: CategoryTypes; label: string }[] = [
    { value: 'React.js', label: 'React.js' },
    { value: 'Next.js', label: 'Next.js' },
    { value: 'React-Native', label: 'React-Native' },
  ]

  const handleChange = (value: string, name: keyof topMenuTypes) => {
    setValue((prev) => ({
      ...prev,
      [name]: name === 'category' ? (value as CategoryTypes) : value,
    }))
  }

  return (
    <div className={styles['top-menu-box']}>
      <Select
        options={categoryOption}
        value={value?.category}
        onChange={(value) => handleChange(value, 'category')}
      />
      <input
        placeholder="타이틀을 입력해주세요"
        value={value.title}
        onChange={(e) => handleChange(e.target.value, 'title')}
      />
    </div>
  )
}

export default TopMenu
