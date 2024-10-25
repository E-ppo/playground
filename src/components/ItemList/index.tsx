import React from 'react'
import './style.scss'
import Item from './Item'
import Chip from '../chip'

interface ItemListProps {
  label?: string
  children?: React.ReactNode
}

const getItemType = (children: React.ReactNode) => {
  const types = new Set(
    React.Children.toArray(children).map((child) => {
      if (React.isValidElement(child)) {
        return child.type === Item ? 'item' : child.type === Chip ? 'chip' : ''
      }
      return ''
    }),
  )
  return Array.from(types).filter(Boolean).join(' ')
}

const ItemList = ({ label, children }: ItemListProps) => {
  const itemType = getItemType(children)

  return (
    <section>
      {label && (
        <div className="label-box">
          <label>{label}</label>
        </div>
      )}
      <div className={`list-box ${itemType}`}>{children}</div>
    </section>
  )
}

ItemList.Item = Item
ItemList.Chip = Chip

export default ItemList
