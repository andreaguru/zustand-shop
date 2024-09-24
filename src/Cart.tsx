import {ReactElement} from 'react'
import {useCartStore} from "./store/cartStore.ts";

export default function Cart():ReactElement {

    interface Product {
        id: number;
        title: string;
        price: number;
    }

    const {cart, removeFromCart, clearCart} = useCartStore((state) => ({
        cart: state.cart,
        removeFromCart: state.removeFromCart,
        clearCart: state.clearCart,
    }));

  return (
      <div style={{"width": "30%", "display": "inline-block"}}>
          <h2>Cart</h2>
          <div className="cartContainer">
              {cart.map((product: Product) => (
                  <div className="cartProduct" key={product.id}>
                      <h3>{product.title}</h3>
                      <button onClick={() => removeFromCart(product.id)}>Remove from cart</button>
                  </div>
              ))}
              <button
                  disabled={!cart.length} onClick={clearCart}>
                  Clear cart
              </button>
          </div>
      </div>
  )
}
