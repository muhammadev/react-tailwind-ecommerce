import { Link } from "react-router-dom";
export default function MainProduct(props) {
    return (
        <div className="p-20 flex justify-center">
            <div className="w-96 my-4">
                <h1 className="text-4xl">All You Need</h1>
                <h1 className="text-5xl mx-8">In <b>One Place</b></h1>
            </div>
            <Link to="/categories" className="min-w-60 my-4 mx-10 p-2 rounded-sm border border-black bg-black text-white hover:bg-white hover:text-black transition duration-100 text-5xl leading-loose">Shop Now</Link>
        </div>
    )
}