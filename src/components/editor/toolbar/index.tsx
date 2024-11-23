'use client'
import React from 'react'
import styles from '../editor.module.scss'
import SvgIcon from '../../SvgIcon'
import HeadingSelect from './HeadingSelect'
import { EditorType } from '@/types/editorTypes'
import BasicFormatButtons from './BasicFormatButtons'
import AlignmentButtons from './AlignmentButtons'

const Toolbar = ({ editor }: { editor: EditorType }) => {
  return (
    <div className={styles.toolbar}>
      <HeadingSelect editor={editor} />
      <BasicFormatButtons editor={editor} />
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? styles.isActive : ''}
      >
        <SvgIcon name="codeBlock" size={24} color="#876370" />
      </button>
      <AlignmentButtons editor={editor} />
    </div>
  )
}

export default Toolbar
