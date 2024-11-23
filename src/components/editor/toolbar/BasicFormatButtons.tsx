import React from 'react'
import SvgIcon from '@/components/SvgIcon'
import { EditorType } from '@/types/editorTypes'
import styles from '../editor.module.scss'

const BasicFormatButtons = ({ editor }: { editor: EditorType }) => {
  return (
    <>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? styles.isActive : ''}
      >
        <SvgIcon name="bold" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? styles.isActive : ''}
      >
        <SvgIcon name="italic" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive('strike') ? styles.isActive : ''}
      >
        <span className={styles.strike}>T</span>
      </button>
    </>
  )
}

export default BasicFormatButtons
