import React from 'react'
import SvgIcon from '../SvgIcon'
import { itemTypes } from './types'
import './style.scss'

const Item = ({ icon, contents, leftText }: itemTypes) => {
  const { title, description } = contents

  return (
    <section className="list-item">
      {icon && (
        <figure className="list-item-figure">
          <SvgIcon name={icon} />
        </figure>
      )}
      <div>
        <h3 className="list-item-title">{title}</h3>
        <p className="list-item-description">{description}</p>
      </div>
      <div className="list-item-left">{leftText}</div>
    </section>
  )
}

export default Item
