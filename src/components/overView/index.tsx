'use client'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import styles from './over-view.module.scss'
import Button from '../button'

interface Props {
  img?: StaticImageData
  title: string
  description: string
  button?: {
    text: string
    onClick: () => void
  }
}

const OverView = ({ img, title, description, button }: Props) => {
  return (
    <section className={styles[`profile-box`]}>
      <div>
        {img && (
          <Image className={styles[`profile-box-img`]} src={img} alt="img" />
        )}
      </div>
      <div className={styles['contents-box']}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={styles['button-box']}>
        {button && <Button variant="secondary" text={button?.text} />}
      </div>
    </section>
  )
}

export default OverView
