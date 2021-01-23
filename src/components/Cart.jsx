import { useState } from "react";
import { Link } from "react-router-dom";
import CartItemOverview from "./CartItemOverview";

export default function Cart(props) {
  const { cart, setCart, products } = props;

  return (
    <div className="m-4 mt-20">
      <h1 className="text-4xl border-b w-max px-8 py-4 m-auto mb-10">
        Items In Cart <b>&middot;</b> (
        {cart.reduce((acc, curr) => acc + curr.quantity, 0)})
      </h1>
      <div className="flex flex-col w-max max-w-10/12 m-auto">
        {cart.length > 0 ? (
          cart.map((item) => {
            return products.map((product) =>
              product.id === item.id ? (
                <CartItemOverview cart={cart} setCart={setCart} product={product} item={item}/>
              ) : null
            );
          })
        ) : (
          <div className="mt-10">
            <div className="text-center text-2xl">nothing in cart</div>
            <Link
              to="/"
              className="block text-center mt-4 p-2 border border-black rounded-sm bg-black text-white hover:bg-white hover:text-black transition duration-200"
            >
              Keep Shoping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
