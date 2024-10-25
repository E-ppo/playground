import { Editor } from '@/components'
import Head from 'next/head'
import React from 'react'
import styles from './editor-page.module.scss'

const page = () => {
  return (
    <div className={styles['editor-page-container']}>
      <input
        className={styles['title-input']}
        placeholder="타이틀을 입력해주세요"
      />
      <Editor />
    </div>
  )
}

export default page
