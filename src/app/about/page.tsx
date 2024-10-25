import React from 'react'
import styles from './about-page.module.scss'
import ItemList from '@/components/ItemList'
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
        <ItemList label="Skill">
          {skillList.map((item, idx) => (
            <ItemList.Chip key={`${item}_${idx}`}>{item}</ItemList.Chip>
          ))}
        </ItemList>
        <ItemList label="Work Experience">
          {workExperience.map((item, idx) => (
            <ItemList.Item
              key={`${item}_${idx}`}
              icon={item.icon}
              contents={item.contents}
              leftText={item.leftText}
            />
          ))}
        </ItemList>
        <ItemList label="Education">
          {education.map((item, idx) => (
            <ItemList.Item
              key={`${item}_${idx}`}
              icon={item.icon}
              contents={item.contents}
              leftText={item.leftText}
            />
          ))}
        </ItemList>
      </section>
    </article>
  )
}

export default page
