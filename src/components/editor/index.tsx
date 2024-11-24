'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useState } from 'react'
import Toolbar from './toolbar'
import styles from './editor.module.scss'
import Image from '@tiptap/extension-image'
import TextAlign from '@tiptap/extension-text-align'
import TopMenu from './TopMenu'
import { CategoryTypes } from '@/types/editorTypes'

interface TopMenuTypes {
  title: string
  category: CategoryTypes
}

const Editor = () => {
  const [text, setText] = useState('Hello World!')
  const [topMenu, setTopMenu] = useState<TopMenuTypes>({
    title: '',
    category: 'React.js',
  })

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

  return (
    <div className={styles.editor}>
      <TopMenu value={topMenu} setValue={setTopMenu} />
      {editor && <Toolbar editor={editor} />}
      <EditorContent editor={editor} />
    </div>
  )
}

export default Editor
