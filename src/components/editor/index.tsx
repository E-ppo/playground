'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useState } from 'react'
import Toolbar from './toolbar'
import styles from './editor.module.scss'
import Image from '@tiptap/extension-image'
import TextAlign from '@tiptap/extension-text-align'

const Editor = () => {
  const [text, setText] = useState('Hello World!')
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
        defaultAlignment: 'left',
      }),
    ],
    content: text,
    onUpdate({ editor }) {
      setText(editor.getHTML())
    },
  })

  console.log(text)

  return (
    <div className={styles.editor}>
      {editor && <Toolbar editor={editor} />}
      <EditorContent editor={editor} />
    </div>
  )
}

export default Editor
