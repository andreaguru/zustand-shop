import {ReactElement} from 'react'
import {useCartStore} from "./store/cartStore.ts";
// import {useAppStore} from "./store/appStore.ts";
import {Product} from "./types.ts";

export default function ProductList({products}: {products: Array<Product>}):ReactElement {
    const addToCart = useCartStore((state) => state.addToCart);
    // const addToCart  = useAppStore((state) => state.addToCart);

  return (
      <div style={{"width": "70%", "display": "inline-block"}}>
          <h2>Products</h2>
          <div className="productContainer">
              {products.map((product: Product) => (
                  <div className="product" key={product.id}>
                      <h3>{product.title}</h3>
                      <p>{product.price}</p>
                      <button onClick={() => addToCart(product)}>Add to cart</button>
                  </div>
              ))}
          </div>
      </div>
  )
}
