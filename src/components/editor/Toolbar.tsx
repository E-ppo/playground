'use client'
import React from 'react'
import styles from './editor.module.scss'
import { Editor } from '@tiptap/react'
import SvgIcon from '../SvgIcon'
import HeadingSelect from './HeadingSelect'

type ToolbarProps = {
  editor: Editor
}

const Toolbar = ({ editor }: ToolbarProps) => {
  return (
    <div className={styles.toolbar}>
      <HeadingSelect editor={editor} />
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        <SvgIcon name="bold" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        <SvgIcon name="italic" />
      </button>
    </div>
  )
}

export default Toolbar
