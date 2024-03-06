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
      const idToRemove = action.payload;
      const existingItem = state.itemsList.find(
        (item) => item.id === idToRemove
      );
      if (existingItem) {
        if (existingItem.quantity === 1) {
          // If quantity is already 1, remove the item from the list
          state.itemsList = state.itemsList.filter(
            (item) => item.id !== idToRemove
          );
        } else {
          // Decrease the quantity by 1
          existingItem.quantity--;
          // Decrease the total quantity by 1
        }
        state.totalQuantity--;
      }
    },

    setShowCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const { addToCart, removeToCart, setShowCart } = cartSlice.actions;
export default cartSlice.reducer;
