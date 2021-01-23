import { Link } from "react-router-dom";
export default function ProductOverview(props) {
	const { product } = props;
  return (
    <div
      className="w-60 md:w-80 mx-10 my-10 text-center md:text-start"
      key={product.id}
    >
      <img
        className="max-h-48 w-60 md:max-w-xs m-auto mb-2 object-contain"
        src={product.image}
      />
      <Link
        to={"/" + product.category.split(" ").join("-")}
        className="text-sm hover:text-blue-500"
      >
        {product.category}
      </Link>
      <h2 className="font-bold my-4">{product.title}</h2>
      <p className="font-bold inline-block">${product.price}</p>
      <Link
        to={`/products/${product.id}`}
        className="inline-block w-24 m-2 text-center border border-black rounded-sm hover:bg-black hover:text-white"
      >
        View
      </Link>
    </div>
  );
}
