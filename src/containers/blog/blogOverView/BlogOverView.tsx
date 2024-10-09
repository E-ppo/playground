'use client'
import { OverView, SvgIcon } from '@/components'
import { blogOverViewInfo } from '@/constants/blog'
import React from 'react'

const BlogOverView = () => {
  const { title, img, description, button } = blogOverViewInfo

  return (
    <section style={{ display: 'flex', alignItems: 'center' }}>
      <SvgIcon name="graduationCap" />
      <OverView
        title={title}
        // img={img}
        description={description}
        button={button}
      />
    </section>
  )
}

export default BlogOverView
