import { Link } from "react-router-dom";
export default function Slogan(props) {
  return (
    <div className="p-2 pt-20 md:p-20 flex flex-wrap justify-center">
      <div className="w-96 my-4 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl">All You Need</h1>
        <h1 className="text-3xl md:text-5xl mx-8">
          In <b>One Place</b>
        </h1>
      </div>
      <Link
        to="/categories"
        className="min-w-68 my-4 mx-10 px-2 rounded-sm border border-black bg-black text-white hover:bg-white hover:text-black transition duration-200 text-5xl leading-loose"
      >
        Shop Now
      </Link>
    </div>
  );
}
