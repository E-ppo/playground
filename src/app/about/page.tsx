import React from 'react'
import styles from './aboutPage.module.scss'
import { ProfileOverView } from '@/containers/about'
import LableTagList from '@/components/labelTagList'
import LabelItemList from '@/components/labelItemList'
import {
  education,
  skillList,
  workExperience,
} from '../constants/aboutConstant'

const page = () => {
  return (
    <article className={styles[`about-page`]}>
      <ProfileOverView />
      <section className={styles.content}>
        <LableTagList label="Skills" tags={skillList} />
        <LabelItemList label="Work Experience" items={workExperience} />
        <LabelItemList label="Education" items={education} />
      </section>
    </article>
  )
}

export default page
