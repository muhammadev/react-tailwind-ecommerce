import Footer from "./Footer";
import ProductOverview from "./ProductOverview";
import Slogan from "./Slogan";

export default function Home({ products, categories }) {
  return (
    <div>
      <Slogan />
      <div className="flex flex-wrap justify-center px-10 py-10">
        {products.map((product) => (
          <ProductOverview product={product} />
        ))}
      </div>
      <Footer categories={categories} products={products} />
    </div>
  );
}
