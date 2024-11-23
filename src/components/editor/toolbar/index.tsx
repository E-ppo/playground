'use client'
import React from 'react'
import styles from '../editor.module.scss'
import SvgIcon from '../../SvgIcon'
import HeadingSelect from './HeadingSelect'
import { EditorType } from '@/types/editorTypes'
import BasicFormatButtons from './BasicFormatButtons'
import AlignmentButtons from './AlignmentButtons'
import OtherFunctionButton from './OtherFunctionButton'

const Toolbar = ({ editor }: { editor: EditorType }) => {
  return (
    <div className={styles.toolbar}>
      <HeadingSelect editor={editor} />
      <BasicFormatButtons editor={editor} />
      <AlignmentButtons editor={editor} />
      <OtherFunctionButton editor={editor} />
    </div>
  )
}

export default Toolbar
