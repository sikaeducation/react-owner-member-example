import "./ItemSummary.css"

const ItemSummary = ({ id, title, isSelected, select }) => {
  const handleClick = () => select(id)
  return (
    <li
      onClick={ handleClick }
      className={`ItemSummary ${isSelected ? "active" : "inactive"}`}
    >{ title }</li>
  )
}

export default ItemSummary
