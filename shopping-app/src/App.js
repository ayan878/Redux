import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";

function App() {
  // Assuming your Redux store has a slice named "auth" containing the "isLoggedIn" state
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  const cartItems = useSelector((state) => state.cart.itemsList);
  console.log(cartItems);
  return (
    <div className="App">
      {!isLoggedIn ? <Auth /> : <Layout />}
      
    </div>
  );
}

export default App;
