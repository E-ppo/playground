'use client'
import { useTestStore } from '@/states/testStore'
import styles from './test.module.scss'
import React from 'react'
import { FontBold } from '../../../public/svgs'

const TestContainerClient = () => {
  const { testStr } = useTestStore()
  return (
    <div className={styles.divContainer}>
      <FontBold />
      <p>{testStr}</p>
    </div>
  )
}

export default TestContainerClient
