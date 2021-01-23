import { useState } from "react";

export default function CartItemOverview(props) {
  const { cart, setCart, product, item } = props;

  const [quantity, setQuantity] = useState(item.quantity);

  // style of left arrow based on quantity -- can't be less than 1
  const leftArrowStyle =
    quantity > 1
      ? "text-4xl font-bold mr-2 p-2 rounded-sm border hover:bg-black hover:text-white"
      : "text-4xl font-bold mr-2 p-2 rounded-sm border border-gray-200 text-gray-200 cursor-not-allowed";

  return (
    <div className="flex border-b py-4 my-4">
      <div className="w-20 mx-4">
        <img src={product.image} alt="product image" />
      </div>
      <div className="flex flex-col justify-center">
        <div>{product.title}</div>
        <div>${product.price}</div>
        <div>quantity: {item.quantity}</div>
        <div>total price: ${(product.price * item.quantity).toFixed(2)} </div>
        <div>
          <button
            onClick={() => {
              let updated = cart.filter(
                (toBeFilteredItem) => item.id !== toBeFilteredItem.id
              );
              setCart(updated);
            }}
            className="text-red-500 text-sm my-2 p-1 rounded-sm border border-red-500 hover:bg-red-500 hover:text-white"
          >
            Remove From Cart
          </button>
          {/* <div className="px-4 my-4">
            <button
              onClick={() => {
								// update quantity
								setQuantity(item.quantity - 1);
								// update cart
								let updated = cart.map(cartItem => {
									if (cartItem.id === product.id) {
										cartItem.quantity = quantity
									}
								})
              }}
              disabled={!(quantity > 1)}
              className={leftArrowStyle}
            >
              &#8249;
            </button>
            <span className="text-2xl leading-loose font-bold mx-2">
              {item.quantity}
            </span>
            <button
              onClick={() => {
								// update quantity
								setQuantity(item.quantity + 1);
								// update cart
								let updated = cart.map(cartItem => {
									if (cartItem.id === product.id) {
										cartItem.quantity = quantity
									}
								})
              }}
              className="text-4xl font-bold ml-2 p-2 rounded-sm border hover:bg-black hover:text-white"
            >
              &#8250;
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
