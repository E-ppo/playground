'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useState } from 'react'
import Toolbar from './Toolbar'
import styles from './editor.module.scss'

const Editor = () => {
  const [text, setText] = useState('Hello World!')
  const editor = useEditor({
    extensions: [StarterKit],
    content: text,
    onUpdate({ editor }) {
      setText(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class:
          'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl focus:outline-none',
      },
    },
  })

  return (
    <div className={styles.editor}>
      {editor && <Toolbar editor={editor} />}
      <EditorContent editor={editor} />
    </div>
  )
}

export default Editor
