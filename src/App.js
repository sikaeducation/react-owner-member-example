import "./App.css";
import ItemList from "./ItemList"

const App = () => {
  const items = [{
    id: 1,
    title: "Apple",
    details: "A delicious apple!",
  },{
    id: 2,
    title: "Banana",
    details: "An outstanding banana.",
  },{
    id: 3,
    title: "Carrot",
    details: "A carrot to beat the band.",
  }]

  return (
    <div className="App">
      <ItemList items={items} />
    </div>
  )
}


export default App;
