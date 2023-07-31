import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  cartItems: [],
  totalCartItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {

    existingCartItem(state, action) {
      state.cartItems = action.payload.cartItems;
      state.totalCartItems= action.payload.totalCartItems;
    },

    cartItems(state, action) {
      const newItem = action.payload;
      const existingCartItem = state.cartItems.find(
        (item) => item.title === newItem.title
      );

      state.totalCartItems++;

      if (!existingCartItem) {
        state.cartItems.push({
          id: newItem.id,
          title: newItem.title,
          quantity: 1,
          price: newItem.price,
          description: newItem.description,
        });
      } else {
        existingCartItem.quantity++;
      }
    },

    removeItemFromCart(state, title) {
      const existingCartItem = state.cartItems.find(
        (item) => item.title === title.payload
      );

      state.totalCartItems--;

      if (existingCartItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(item => item.title !== title.payload)
      } else {
        existingCartItem.quantity--;
      }
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
