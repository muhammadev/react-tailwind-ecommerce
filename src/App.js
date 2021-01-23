import { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Categories from "./components/Categories";
import ProductPage from "./components/ProductPage";
import CategoryPage from "./components/CategoryPage";

function App() {
  const [error, setError] = useState(null); //errors
  const [isLoaded, setIsLoaded] = useState(false); //isLoaded
  const [products, setProducts] = useState([]); //products

  const [cart, setCart] = useState([]);

  const categories = products.map((product) => product.category);

  console.log(cart);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setProducts(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    <Router>
      <Header cart={cart} categories={categories} />
      <Switch>
        <Route exact path="/categories">
          <Categories categories={categories} />
        </Route>
        <Route path="/categories/:category">
          <CategoryPage products={products} />
        </Route>
        <Route path="/products/:productId">
          <ProductPage setCart={setCart} cart={cart} />
        </Route>
        <Route path="/cart">
          <Cart cart={cart} setCart={setCart} products={products} />
        </Route>
        <Route exact path="/">
          <div>
            {error ? (
              () => {
                console.log("error fetching porducts: ", error);
                return (
                  <div className="text-red-500 text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    something went wrong!
                  </div>
                );
              }
            ) : !isLoaded ? (
              <div className="text-xl text-blue-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                loading...
              </div>
            ) : (
              <Home products={products} categories={categories} />
            )}
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
