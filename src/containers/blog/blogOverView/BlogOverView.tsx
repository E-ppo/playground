'use client'
import { OverView } from '@/components'
import { blogOverViewInfo } from '@/constants/blog'
import { useAuth } from '@/hooks'
import React from 'react'

const BlogOverView = () => {
  const { title, img, description, button } = blogOverViewInfo
  const { user } = useAuth()

  return (
    <section>
      <OverView
        title={title}
        img={img}
        description={description}
        button={user ? button : undefined}
      />
    </section>
  )
}

export default BlogOverView
