import React from 'react'

export async function getStaticPaths() {
  const categories = ['React', 'Next', 'React-Native', 'ㅇ_ㅇ'] // 실제 카테고리 목록으로 대체
  const paths = categories.map((category) => ({
    params: { category },
  }))

  return { paths, fallback: false }
}

const BlogList = () => {
  return <div>list</div>
}

export default BlogList
