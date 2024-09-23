import './App.css'
import Cart from "./Cart.tsx";
import ProductList from "./ProductList.tsx";
import {useEffect, useState} from "react";
import {Product} from "./types.ts";

function App() {

    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);

  return (
    <>
        <h3>Welcome to the store</h3>
        <ProductList products={products} />
        <Cart />
    </>
  )
}

export default App
