import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function ProductPage(props) {
  // path name params
  const { productId } = useParams();

  // quantity of products to add to cart
  const [quantity, setQuantity] = useState(1);

  // product fetching requirements' states
  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // fetching product by id provided with path name
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setProduct(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  // style of left arrow based on quantity -- can't be less than 1
  const leftArrowStyle =
    quantity > 1
      ? "text-4xl font-bold mr-2 p-2 rounded-sm border hover:bg-black hover:text-white"
      : "text-4xl font-bold mr-2 p-2 rounded-sm border border-gray-200 text-gray-200 cursor-not-allowed";

  // props
  const { setCart, cart } = props;
  return (
    <div>
      {error ? (
        () => {
          console.log("error fetching product: ", error);
          return (
            <div className="text-red-500 font-bold text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              something went wrong!
            </div>
          );
        }
      ) : !isLoaded ? (
        <div className="text-blue-500 font-bold text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Loading...
        </div>
      ) : (
        <div className="m-auto mt-20 px-20 md:px-40 flex md:flex-col justify-center flex-wrap md:flex-nowrap">
          <div className="flex items-center">
            <img
              className="max-h-80 max-w-xs md:m-auto mb-2 object-cover"
              src={product.image}
            />
          </div>
          <div className="mt-8 flex flex-col">
            <div className="flex flex-col justify-center items-center text-center m-auto mx-10 md:mr-10">
              <p className="text-sm">
                Category:{" "}
                <Link to={`/categories/${product.category?.split(" ").join("-")}`}>{product.category}</Link>
              </p>
              <h2 className="font-bold my-4">{product.title}</h2>
              <p className="">
                Price: <b>${product.price}</b>
              </p>
              <div className="flex my-4">
                <div className="cursor-pointer mx-2 w-10 h-10 bg-blue-500 rounded-4"></div>
                <div className="cursor-pointer mx-2 w-10 h-10 bg-red-500 rounded-4"></div>
                <div className="cursor-pointer mx-2 w-10 h-10 bg-green-500 rounded-4"></div>
              </div>
            </div>
            <div className="min-w-sm m-auto mt-4 flex flex-col justify-center items-center">
              <button
                onClick={() => {
                  let founded = false;
                  cart.forEach((item) => {
                    if (item.id === product.id) founded = true;
                  });

                  if (founded) {
                    // update quantity
                    let newCart = cart.map((item) => {
                      if (item.id === product.id) {
                        console.log("before: ", item);
                        item.quantity += quantity;
                        console.log("after: ", item);
                      }
                      return item;
                    });
                    setCart(newCart);
                    console.log("updated: ", newCart);
                  } else {
                    // add to cart
                    let newItem = {
                      id: product.id,
                      title: product.title,
                      quantity: quantity,
                    };
                    setCart((cart) => [...cart, newItem]);
                    console.log("new item added: ", newItem);
                  }
                }}
                className="border border-gray-800 hover:bg-black hover:text-white p-4"
              >
                Add to cart <b>&middot;</b> $
                {(product.price * quantity).toFixed(2)}
              </button>
              <div className="my-4">
                <button
                  onClick={() => {
                    setQuantity(quantity - 1);
                  }}
                  disabled={!(quantity > 1)}
                  className={leftArrowStyle}
                >
                  &#8249;
                </button>
                <span className="text-2xl leading-loose font-bold mx-2">
                  {quantity}
                </span>
                <button
                  onClick={() => {
                    setQuantity(quantity + 1);
                  }}
                  className="text-4xl font-bold ml-2 p-2 rounded-sm border hover:bg-black hover:text-white"
                >
                  &#8250;
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
