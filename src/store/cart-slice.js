import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  showCart: false,
  cartItems: [],
  totalCartItems: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    showCart(state) {
      if (state.showCart === false) {
        state.showCart = true;
      } else {
        state.showCart = false;
      }
    },

    cartItems(state, action){
        const newItem = action.payload;
        const existingCartItem = state.cartItems.findIndex((item) => item.id === newItem.id);

        if(!existingCartItem){
            state.cartItems.push({
                id: newItem.id,
                title: newItem.title,
                quantity: 1,
                price: newItem.price,
                description: newItem.description
            })
        } else{
            existingCartItem.quantity++;
        }
    }
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
