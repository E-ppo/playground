import SvgIcon from '@/components/SvgIcon'
import { EditorType } from '@/types/editorTypes'
import React from 'react'
import styles from '../editor.module.scss'

const AlignmentButtons = ({ editor }: { editor: EditorType }) => {
  return (
    <>
      <button
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        className={
          editor.isActive({ textAlign: 'left' }) ? styles.isActive : ''
        }
      >
        <SvgIcon name="formatLeft" size={24} color="#876370" />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        className={
          editor.isActive({ textAlign: 'center' }) ? styles.isActive : ''
        }
      >
        <SvgIcon name="formatCenter" size={24} color="#876370" />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        className={
          editor.isActive({ textAlign: 'right' }) ? styles.isActive : ''
        }
      >
        <SvgIcon name="formatRight" size={24} color="#876370" />
      </button>
    </>
  )
}

export default AlignmentButtons
