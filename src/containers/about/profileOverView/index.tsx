import Image from 'next/image'
import React from 'react'
import CharImage from '@/public/img/eppo-char.webp'
import styles from './profileOverView.module.scss'

const ProfileOverView = () => {
  return (
    <section className={styles[`profile-box`]}>
      <div>
        <Image
          className={styles[`profile-box-img`]}
          src={CharImage}
          alt="character"
        />
      </div>
      <div className={styles['contents-box']}>
        <h2>Eppo</h2>
        <p>
          {`web & mobile Frontend Developer
        Seoul, KR`}
        </p>
      </div>
    </section>
  )
}

export default ProfileOverView
