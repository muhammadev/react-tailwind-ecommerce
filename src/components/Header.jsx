import { Link } from "react-router-dom";

export default function Header(props) {
  const { cart, categories } = props;
  const listOfCategories = [];
  categories.forEach((category) => {
    if (listOfCategories.indexOf(category) === -1) {
      listOfCategories.push(category);
    }
  });
  return (
    <div className="absolute top-0 left-0 w-full flex justify-between px-4 md:px-28 py-2">
      {/* title */}
      <div>
        <h1 className="md:text-2xl font-bold md:font-normal">
          Modern Boutique
        </h1>
      </div>
      {/* menu */}
      <div>
        <ul className="flex">
          <li className="mx-2 border-b border-gray-500">
            <Link to="/">Home</Link>
          </li>
          <li className="group mx-2 border-b border-gray-500">
            <p>Categories</p>
            <div className="hidden group-hover:block border w-40 p-4 bg-white absolute -ml-8">
              <ul>
                {listOfCategories.map((category) => (
                  <li className="my-2 border-b capitalize">
                    <Link
                      className="hover:text-blue-500"
                      to={`/categories/${category.split(" ").join("-")}`}
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className="mx-2 border-b border-gray-500">
            <Link to="/cart">
              cart<b className="mx-1">&middot;</b>(
              {cart.reduce((acc, curr) => acc + curr.quantity, 0)})
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
