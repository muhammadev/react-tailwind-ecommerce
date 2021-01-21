import { Link } from "react-router-dom";

export default function Header(props) {
    const { cart } = props;
    return (
        <div className="absolute top-0 left-0 w-full flex justify-between px-28 py-2">
            {/* title */}
            <div>
                <h1 className="text-2xl">Modern Boutique</h1>
            </div>
            {/* menu */}
            <div>
                <ul className="flex">
                    <li className="mx-2 border-b border-gray-500"><Link to="/">Home</Link></li>
                    <li className="mx-2 border-b border-gray-500"><Link to="/categories">Categories</Link></li>
                    <li className="mx-2 border-b border-gray-500"><Link to="/cart">cart <b>&middot;</b> ({cart.reduce((acc, curr) => acc + curr.quantity, 0)})</Link></li>                
                </ul>
            </div>
        </div>
    );
}