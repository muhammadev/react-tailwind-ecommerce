import { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Product from "./components/Product";
import Header from "./components/Header";
import Cart from "./components/Cart";

function App() {
  const [error, setError] = useState(null); //errors
  const [isLoaded, setIsLoaded] = useState(false); //isLoaded
  const [products, setProducts] = useState([]); //products

  const [cart, setCart] = useState([]);

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
      <Header cart={cart} />
      <Switch>
        <Route path="/products/:productId">
          <Product setCart={setCart} cart={cart}/>
        </Route>
        <Route path="/cart">
          <Cart cart={cart} products={products}/>
        </Route>
        <Route exact path="/">
          <div>
            {error ? (
              <div className="text-red-500 text-xl">Error: {error.message}</div>
            ) : !isLoaded ? (
              <div className="text-xl text-blue-500">loading...</div>
            ) : (
              <Home products={products} />
            )}
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
