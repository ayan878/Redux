import React from "react";
import Header from "./Header";
import Products from "./Products";
import CartItems from "./CartItems";
import "./Layout.css";
import { useSelector } from "react-redux";
const Layout = () => {
  const { itemsList } = useSelector((state) => state.cart);

  // Calculate totalPrice based on itemsList
  const totalPrice = itemsList.reduce(
    (total, item) => total + item.totalPrice,
    0
  );

  console.log(totalPrice);
  const showCart = useSelector((state) => state.cart.showCart);
  console.log(showCart)

  return (
    <div className="layout">
      <Header />
      <Products />
      {showCart && <CartItems />}
      <div className="total-price">
        <h3>Total: ${totalPrice}</h3>
        <button className="orderBtn">Place Order</button>
      </div>
    </div>
  );
};

export default Layout;
