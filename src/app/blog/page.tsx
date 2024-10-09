import React from 'react'
import styles from './blog-Page.module.scss'
import { BlogOverView } from '@/containers/blog'

const page = () => {
  return (
    <main className={styles['blog-page']}>
      <article>
        <header className={styles['overView-Box']}>
          <BlogOverView />
        </header>

        <nav aria-label="카테고리 내비게이션">
          <ul>
            <li>
              <a href="#category1">카테고리1</a>
            </li>
            <li>
              <a href="#category2">카테고리2</a>
            </li>
          </ul>
        </nav>

        <section aria-label="블로그 포스트 목록">
          <h2>최신 포스트</h2>
          <ul>
            <li>
              <article>
                <h3>블로그 포스트 제목</h3>
                <p>포스트 요약...</p>
                <a href="/post/1">더 읽기</a>
              </article>
            </li>
          </ul>
        </section>
      </article>
    </main>
  )
}

export default page
