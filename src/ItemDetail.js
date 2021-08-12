import "./ItemDetail.css"

const ItemDetail = ({ title, details }) => {
  return (
    <div className="ItemDetail">
      <h2>{ title }</h2>
      <p>{ details }</p>
    </div>
  )
}

export default ItemDetail
