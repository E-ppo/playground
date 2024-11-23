'use client'
import React from 'react'
import styles from './editor.module.scss'
import { Editor } from '@tiptap/react'
import SvgIcon from '../SvgIcon'
import HeadingSelect from './HeadingSelect'
import TextAlign from '@tiptap/extension-text-align'

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
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'is-active' : ''}
      >
        <SvgIcon name="codeBlock" size={24} color="#876370" />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
      >
        <SvgIcon name="formatLeft" size={24} color="#876370" />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
      >
        <SvgIcon name="formatCenter" size={24} color="#876370" />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
      >
        <SvgIcon name="formatRight" size={24} color="#876370" />
      </button>
    </div>
  )
}

export default Toolbar
