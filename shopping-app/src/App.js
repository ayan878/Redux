import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import Notification from "./components/Notification";
import { uiActions } from "./store/ui-slice";

let isFirstRender = true;
function App() {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);
  const cart = useSelector((state) => state.cart);
  // Assuming your Redux store has a slice named "auth" containing the "isLoggedIn" state
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    const sendRequest = async () => {
      //send state as sending request
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sending Request",
          type: "warning",
        })
      );
      const res = await fetch(
        "https://redux-http-shopping-cart-8f8d8-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      const data = await res.json();
      //send state as requust is successful
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sending Request  to database succesfully",
          type: "success",
        })
      );
    };
    sendRequest().catch((err) => {
      //send state as Error
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sending Request failed",
          type: "err",
        })
      );
    });
  }, [cart]);
  // console.log(isLoggedIn);
  // const cartItems = useSelector((state) => state.cart.itemsList);
  // console.log(cartItems);
  return (
    <div className="App">
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
      {!isLoggedIn ? <Auth /> : <Layout />}
    </div>
  );
}

export default App;
