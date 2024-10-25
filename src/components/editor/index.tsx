'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import styles from './editor.module.scss'

interface EditorProps {
  initialContent?: string
  onSave?: (content: string) => void
}

const Editor = ({ initialContent = '', onSave }: EditorProps) => {
  const [content, setContent] = useState(initialContent)
  const editorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = content
    }
  }, [])

  const applyFormatting = useCallback((format: string) => {
    const selection = document.getSelection()
    const range = selection?.getRangeAt(0)

    const span = document.createElement('span')

    switch (format) {
      case 'bold':
        span.style.fontWeight = 'bold'
        break
      case 'italic':
        span.style.fontStyle = 'italic'
        break
      case 'underline':
        span.style.textDecoration = 'underline'
        break
    }

    if (range) range.surroundContents(span)
  }, [])

  return (
    <section>
      <header className={styles.toolbar}>
        <button onClick={() => applyFormatting('bold')} aria-label="Bold">
          <strong>B</strong>
        </button>
        <button
          // onClick={() => execCommand('italic')}
          aria-label="Italic"
        >
          <em>I</em>
        </button>
        <button
          // onClick={() => execCommand('underline')}
          aria-label="Underline"
        >
          <u>U</u>
        </button>
        <button
          // onClick={() => execCommand('insertUnorderedList')}
          aria-label="Bullet List"
        >
          •
        </button>
        <button
          // onClick={() => execCommand('insertOrderedList')}
          aria-label="Numbered List"
        >
          1.
        </button>
      </header>
      <main
        ref={editorRef}
        className={styles.editableContent}
        contentEditable
        aria-label="Editor content"
        role="textbox"
        aria-multiline="true"
      />
    </section>
  )
}

export default Editor
