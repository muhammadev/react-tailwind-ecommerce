import { Link } from "react-router-dom";
export default function ProductOverview({product}) {
  return (
    <div
      className="w-60 md:w-80 mx-10 my-10 text-center sm:text-left"
      key={product.id}
    >
      <img
        className="max-h-48 w-60 md:max-w-xs mb-4 object-contain"
        src={product.image}
      />
      <Link
        to={`/products/${product.id}`}
        className="block my-4 text-gray-700 hover:text-black"
      >
        {product.title}
      </Link>
      <p className="inline-block">${product.price}</p>
      <Link
        to={"/categories/" + product.category?.split(" ").join("-")}
        className="block mt-4 text-sm text-gray-600 hover:text-blue-500"
      >
        {product.category}
      </Link>
    </div>
  );
}
