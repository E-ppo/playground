import React from 'react'
import styles from './blog-Page.module.scss'
import { BlogOverView } from '@/containers/blog'
import { NavList } from '@/components'
import { blogNavListItem } from '@/constants/blog'

interface Props {
  children: React.ReactNode
}

export const experimental_ppr = true

const BlogPage = ({ children }: Props) => {
  return (
    <main className={styles['blog-page']}>
      <article>
        <header className={styles['overView-Box']}>
          <BlogOverView />
        </header>

        <nav aria-label="카테고리 내비게이션">
          <NavList list={blogNavListItem} variant="tab-bar" />
        </nav>
      </article>
    </main>
  )
}

export default BlogPage
