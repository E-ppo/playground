import { Editor } from '@/components'
import React from 'react'
import styles from './editor-page.module.scss'

const page = () => {
  return (
    <div className={styles['editor-page-container']}>
      <Editor />
    </div>
  )
}

export default page
