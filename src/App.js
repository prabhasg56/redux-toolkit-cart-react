import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { uiAction } from "./store/ui-slice";
import { cartAction } from "./store/cart-slice";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.showCart);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const baseUrl = "https://redux-toolkit-cart-115d5-default-rtdb.firebaseio.com/"

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    const sendCartData = async () => {
      dispatch(
        uiAction.notificationHandler({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data!",
        })
      );

      const response = await fetch(`${baseUrl}cart.json`,
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Something went to wrong!");
      }

     if(response.status === 200){
      dispatch(
        uiAction.notificationHandler({
          status: "success",
          title: "Success...",
          message: "Successfully sent cart data!",
        })
      );
     }
    };

    sendCartData().catch((error) => {
      dispatch(
        uiAction.notificationHandler({
          status: "error",
          title: "Error...",
          message: "Something went to wrong!",
        })
      );
    });
  }, [cart]);

  useEffect(()=>{

    const fetchData = async () => {

      try { 
        const response = await fetch(`${baseUrl}cart.json`);

      const jsonResponse = await response.json();

      if(response.status === 200){
        dispatch(cartAction.existingCartItem({cartItems:jsonResponse.cartItems, totalCartItems: jsonResponse.totalCartItems}))
      }else {
        throw new Error(jsonResponse.data.message);
      }
      }catch(error){
        alert(error);
      }
    }

    fetchData();
  }, [dispatch])

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
