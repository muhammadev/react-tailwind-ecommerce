import { Link } from "react-router-dom";
import Slogan from "./Slogan";

export default function Home(props) {
  const { products } = props;
  return (
    <div>
      <Slogan />
      <div className="flex flex-wrap justify-center px-10 py-10">
        {products.map((product) => (
          <div className="w-80 ml-10 mb-8" key={product.id}>
            <img
              className="max-h-48 max-w-xs mb-2 object-cover"
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
        ))}
      </div>
    </div>
  );
}
