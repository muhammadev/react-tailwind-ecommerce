import { Link } from "react-router-dom";

export default function Footer({ categories, products }) {
  return (
    <div className="p-6 h-2/6 bg-black text-gray-300">
      <div className="flex flex-wrap sm:justify-center">
        {/* all sections */}
        {categories.map((category) => (
          <div key={category} className="mb-4 sm:mx-8">
            <h3 className="capitalize mb-3 text-2xl text-white">{category}</h3>
            <ul>
              {products.map((product) =>
                product.category === category ? (
                  <li
                    key={product.id}
                    className="text-sm my-2 hover:text-white"
                  >
                    <Link to={`/products/${product.id}`}>
                      {product.title.length > 32
                        ? product.title.substring(0, 32) + "..."
                        : product.title}
                    </Link>
                  </li>
                ) : null
              )}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-4 sm:text-center">
        <p className="text-xs">
          This is an ecommerce frontend developed by{" "}
          <a
            href="https://github.com/muhammadev"
            className="text-gray-500 hover:text-white"
          >
            Muhammad Tarek
          </a>{" "}
          for practicing ReactJS & TailwindCSS. All styling has been made using
          TailwindCSS with zero css lines.
        </p>
        <p className="mt-2 text-center text-sm">
          <a className="hover:text-white" href="https://github.com/muhammadev" target="_blank">Github</a>{" "}&#903;{" "}
          <a className="hover:text-white" href="https://twitter.com/_muhammadev" target="_blank">Twitter</a>{" "}&#903;{" "}
          <a className="hover:text-white" href="https://linkedin.com/in/mohamed-tarek-b2420118b" target="_blank">LinkedIn</a>
        </p>
      </p>
    </div>
  );
}
