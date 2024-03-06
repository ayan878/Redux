import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const CartItems = useSelector((state) => state.cart.itemsList);
  console.log(CartItems)
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {/* <CartItem id={1} price={2500} name={"Macbook"} /> */}
        {CartItems.map((item) => (
          <li>
            <CartItem
              id={item.id}
              price={item.price}
              total={item.totalPrice}
              name={item.name}
              quantity={item.quantity}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
