import React from 'react'
import styles from './blog-Page.module.scss'
import { BlogOverView } from '@/containers/blog'
import { NavList } from '@/components'
import { blogNavListItem } from '@/constants/blog'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className={styles['blog-page']}>
      <article>
        <header className={styles['overView-Box']}>
          <BlogOverView />
        </header>

        <nav aria-label="카테고리 내비게이션">
          <NavList list={blogNavListItem} variant="tab-bar" />
        </nav>
        <section className={styles['blog-list']}>{children}</section>
      </article>
    </main>
  )
}
