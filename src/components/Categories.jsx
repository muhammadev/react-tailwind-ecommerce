import { Link } from "react-router-dom";

export default function Categories(props) {
  const { categories } = props;

  let listOfCategories = [];

  categories.forEach((category) => {
    if (listOfCategories.indexOf(category) === -1)
      listOfCategories.push(category);
  });

  return (
    <div className="px-4 py-10 w-screen flex flex-wrap justify-center">
      {listOfCategories.map((category) => (
        <Link
          to={`/categories/${category.split(" ").join("-")}`}
          className="py-8 px-4 m-10 w-1/2 text-center uppercase text-2xl border-2 border-black bg-black text-white hover:bg-white hover:text-black cursor-pointer"
        >
          {category}
        </Link>
      ))}
    </div>
  );
}
