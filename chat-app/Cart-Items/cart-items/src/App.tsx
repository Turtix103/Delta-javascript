import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CartHeader from "./assets/components/CartHeader";
import CartProducts from "./assets/components/CartProducts";



export interface ProductInterface {
  id: number;
  value: number;
}
const initProducts: ProductInterface[] = [
  { id: 1, value: 0},
  { id: 2, value: 0},
  { id: 3, value: 0},
  { id: 4, value: 0},
]
function App() {

  const [products, setProducts] = useState<ProductInterface[]>(initProducts);
  return (
    <div className="App">
    <CartHeader></CartHeader>
    <CartProducts product = {products} onIncrement = {onIncrement} onDecrement={} = {onDecrement}> </CartProducts>
    </div>
  )
}

export default App
