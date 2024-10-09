import React from 'react'
import SvgIcon from '../SvgIcon'
import { itemTypes } from './types'
import styles from './labe-iItem-list.module.scss'

const ListItem = ({ icon, contents, leftText }: itemTypes) => {
  const { title, description } = contents

  return (
    <section className={styles['list-item']}>
      {icon && (
        <figure className={styles['list-item-figure']}>
          <SvgIcon name={icon} />
        </figure>
      )}
      <div>
        <h3 className={styles['list-item-title']}>{title}</h3>
        <p className={styles['list-item-description']}>{description}</p>
      </div>
      <div className={styles['list-item-left']}>{leftText}</div>
    </section>
  )
}

export default ListItem
