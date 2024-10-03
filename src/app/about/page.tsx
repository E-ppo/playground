import React from 'react'
import styles from './aboutPage.module.scss'
import { ProfileOverView } from '@/containers/about'

const page = () => {
  return (
    <article className={styles[`about-page`]}>
      <ProfileOverView />
      어바웃page
    </article>
  )
}

export default page
