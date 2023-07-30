import { useSelector } from "react-redux";
import { useEffect } from "react";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const cartAction = useSelector((state) => state.cart.showCart);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    fetch(
      "https://redux-toolkit-cart-115d5-default-rtdb.firebaseio.com/cart.json",
      {
        method: "PUT",
        body: JSON.stringify(cart),
      }
    );
  }, [cart]);

  return (
    <Layout>
      {cartAction && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
