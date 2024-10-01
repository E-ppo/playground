import Image from "next/image"
import styles from "./page.module.css"
import TestContainerClient from "@/containers/test/testContainer.client"

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div className={styles.ctas}>
          <TestContainerClient />
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  )
}
