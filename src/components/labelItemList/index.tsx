import React from 'react'
import styles from './labelItemList.module.scss'
import { KeyOfIcon } from '@/types/svgIconTypes'
import { itemTypes } from './types'
import ListItem from './ListItem'

interface Props {
  label: string
  items?: itemTypes[]
}

const LabelItemList = ({ label, items }: Props) => {
  return (
    <section>
      <div className={styles['label-box']}>
        <label>{label}</label>
      </div>
      <div className={styles['list-box']}>
        {items?.map((item, index) => {
          const { icon, contents, leftText } = item
          return (
            <ListItem
              key={`${contents.title}_${index}`}
              icon={icon}
              contents={contents}
              leftText={leftText}
            />
          )
        })}
      </div>
    </section>
  )
}

export default LabelItemList
