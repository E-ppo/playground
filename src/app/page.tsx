import Image from 'next/image'
import styles from './page.module.css'
import TestContainerClient from '@/containers/test/testContainer.client'

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.ctas}>
          <TestContainerClient />
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  )
}
