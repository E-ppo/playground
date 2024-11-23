import SvgIcon from '@/components/SvgIcon'
import { EditorType } from '@/types/editorTypes'
import React from 'react'
import styles from '../editor.module.scss'

const OtherFunctionButton = ({ editor }: { editor: EditorType }) => {
  return (
    <>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? styles.isActive : ''}
      >
        <SvgIcon name="codeBlock" size={24} color="#876370" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'is-active' : ''}
      >
        <SvgIcon name="doubleQuotes" color="#876370" size={30} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      >
        <SvgIcon name="bulletList" color="#876370" size={30} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}
      >
        <SvgIcon name="listOl" color="#876370" size={30} />
      </button>
    </>
  )
}

export default OtherFunctionButton
