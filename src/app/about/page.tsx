import React from 'react'
import styles from './about-page.module.scss'
import LableTagList from '@/components/labelTagList'
import LabelItemList from '@/components/labelItemList'
import {
  education,
  profileOverViewInfo,
  skillList,
  workExperience,
} from '../../constants/about'
import { OverView } from '@/components'

const page = () => {
  const { img, title, description } = profileOverViewInfo
  return (
    <article className={styles['about-page']}>
      <OverView img={img} title={title} description={description} />
      <section className={styles.content}>
        <LableTagList label="Skills" tags={skillList} />
        <LabelItemList label="Work Experience" items={workExperience} />
        <LabelItemList label="Education" items={education} />
      </section>
    </article>
  )
}

export default page
