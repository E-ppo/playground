import React from 'react'
import styles from './aboutPage.module.scss'
import { ProfileOverView } from '@/containers/about'
import LableTagList from '@/components/labelTagList'

const page = () => {
  const skillList = [
    'JavaScript',
    'TypeScript',
    'React',
    'Reac-Native',
    'Next.js',
    'SCSS',
    'StyledComponents',
  ]

  return (
    <article className={styles[`about-page`]}>
      <ProfileOverView />
      <LableTagList label={'Skills'} tags={skillList} />
    </article>
  )
}

export default page
