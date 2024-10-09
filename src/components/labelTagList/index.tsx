import React from 'react'
import styles from './labelTagList.module.scss'
import Chip from '../chip'

interface Props {
  label: string
  tags: readonly string[]
}

const LableTagList = ({ label, tags }: Props) => {
  return (
    <section className={styles.section}>
      <div className={styles[`label-box`]}>
        <label>{label}</label>
      </div>
      <ul className={styles[`chip-list`]}>
        {/* {tags.map((item, index) => (
          <li key={`${item}_${index}`}>
            <Chip>{item}</Chip>
          </li>
        ))} */}
      </ul>
    </section>
  )
}

export default LableTagList
