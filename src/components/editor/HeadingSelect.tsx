'use client'

import { Editor } from '@tiptap/react'
import { SelectOption } from '../select/types'
import Select from '../select'
import styles from './editor.module.scss'

interface HeadingSelectProps {
  editor: Editor | null
}

type Level = 1 | 2 | 3

const HeadingSelect = ({ editor }: HeadingSelectProps) => {
  if (!editor) return null

  const headingOptions: SelectOption[] = [
    { value: 'paragraph', label: '본문' },
    { value: '1', label: 'H1' },
    { value: '2', label: 'H2' },
    { value: '3', label: 'H3' },
  ]

  const getCurrentHeadingLevel = () => {
    if (editor.isActive('paragraph')) return 'paragraph'
    for (let i = 1; i <= 3; i++) {
      if (editor.isActive('heading', { level: i as Level })) return String(i)
    }
    return 'paragraph'
  }

  const handleHeadingChange = (value: string) => {
    if (value === 'paragraph') {
      editor.chain().focus().setParagraph().run()
    } else {
      const level = Number(value) as Level
      editor.chain().focus().toggleHeading({ level }).run()
    }
  }

  return (
    <Select
      className={styles.select}
      options={headingOptions}
      value={getCurrentHeadingLevel()}
      onChange={handleHeadingChange}
      placeholder="본문을 입력해주세요"
    />
  )
}

export default HeadingSelect
