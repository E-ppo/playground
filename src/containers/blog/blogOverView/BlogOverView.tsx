'use client'
import { Button, OverView } from '@/components'
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
        button={user ? <Button text={button.text} href="/editor" /> : undefined}
      />
    </section>
  )
}

export default BlogOverView
