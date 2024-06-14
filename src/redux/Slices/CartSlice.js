import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      //state.cart.push(action.payload);
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cart[itemIndex].qty += 1;
      } else {
        const temp = { ...action.payload, qty: 1 };
        state.cart = [...state.cart, temp];
      }
    },
    removeFromCart: (state, action) => {
      const data = state.cart.filter((item) => item.id !== action.payload.id);
      state.cart = data;
    },
    removeSingleItem: (state, action) => {
      const itemindex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cart[itemindex].qty >= 1) {
        state.cart[itemindex].qty -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, removeSingleItem } = cartSlice.actions;

export default cartSlice.reducer;
