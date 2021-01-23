import ProductOverview from "./ProductOverview";
import Slogan from "./Slogan";

export default function Home(props) {
  const { products } = props;
  return (
    <div>
      <Slogan />
      <div className="flex flex-wrap justify-center px-10 py-10">
        {products.map((product) => (
          <ProductOverview product={product} />
        ))}
      </div>
    </div>
  );
}
