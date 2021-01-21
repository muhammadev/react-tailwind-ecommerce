export default function Cart(props) {
  // get all items in cart from products state
  const { cart, products } = props;

  return (
    <div className="m-4">
			<h1 className="text-4xl text-center">Items In Cart <b>&middot;</b> ({cart.reduce((acc, curr) => acc + curr.quantity, 0)})</h1>
			<div className="flex flex-col w-max m-auto">
				{cart.map((item) => {
					return products.map((product) =>
						product.id === item.id ? (
							<div className="flex border-b py-4 my-4">
								<div className="w-20 mx-4">
									<img src={product.image} alt="product image"/>
								</div>
								<div className="flex flex-col justify-center">
									<div>{product.title}</div>
									<div>${product.price}</div>
									<div>quantity: {item.quantity}</div>
									<div>total price: ${product.price * item.quantity} </div>
									<div><button className="text-red-500 text-sm my-2 p-1 rounded-sm border border-red-500 hover:bg-red-500 hover:text-white">Remove From Cart</button></div>
								</div>
							</div>
						) : null
					);
				})}
			</div>
    </div>
  );
}
