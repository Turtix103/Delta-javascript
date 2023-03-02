import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Body from './components/Body'

let products = [
  {label: "hello", state: 0},
  {label: "sup", state: 0},
  {label: "", state: 0},
  {label: "puff", state: 0}
]

function App() {

  useEffect(() => {}, products);

  const [items, setItems] = useState(products);

  function handler(i: number) {
    products[i].state++;
    products = [...products];
    setItems(products);
  }

  return (
    <div className="App">
      <Body products={items} productCallback={handler}></Body>
    </div>
  )
}

export default App
