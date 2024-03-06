import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    showCart: false,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
      }
      state.totalQuantity++; 
    },
    removeToCart(state, action) {
      // You need to implement logic for removing item from cart
    },
    setShowCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

// Destructuring action creators
export const { addToCart, removeToCart, setShowCart } = cartSlice.actions;
export default cartSlice.reducer;
