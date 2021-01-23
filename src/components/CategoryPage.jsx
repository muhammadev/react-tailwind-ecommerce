import { useParams } from "react-router-dom";
import ProductOverview from "./ProductOverview"
export default function CategoryPage(props) {
    let { products } = props;
    let { category } = useParams();

    category = category.split("-").join(" ");

    // select all products with same category
    let categoryProducts = [];
    products.forEach((product) => {
        if (product.category === category) {
            categoryProducts.push(product)
        }
    })

    return (
        <div className="mt-20">
            <h1 className="text-center text-4xl capitalize">{category}</h1>
            <div className="flex flex-wrap justify-center px-10 py-10">
                {categoryProducts.map(product => (
                    <ProductOverview product={product} />
                ))}
            </div>
        </div>
    );
}