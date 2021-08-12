import { useState } from "react"
import ItemSummary from "./ItemSummary"
import ItemDetail from "./ItemDetail"
import "./ItemList.css"

const ItemList = ({items}) => {
  const [selectedItem, setSelectedItem] = useState(items[0])
  const select = id => {
    const item = items.find(item => item.id === id)
    return setSelectedItem(item)
  }

  const $items = items.map(item => {
    const isSelected = item.id === selectedItem.id
    return <ItemSummary
      key={item.id}
      select={select}
      id={item.id}
      title={item.title}
      isSelected={isSelected}
    />
  })

  return (
    <div className="ItemList">
      <ul>{$items}</ul>
      <ItemDetail title={selectedItem.title} details={selectedItem.details} />
    </div>
  )
}

export default ItemList
