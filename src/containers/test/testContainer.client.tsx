'use client'
import { useTestStore } from '@/states/testStore'
import styles from './test.module.scss'
import React from 'react'

const TestContainerClient = () => {
  const { testStr } = useTestStore()
  return (
    <div className={styles.divContainer}>
      <p>{testStr}</p>
    </div>
  )
}

export default TestContainerClient
