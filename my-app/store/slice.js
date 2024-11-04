// store/slice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {  cartItems: [],};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload)
      state.cartItems.push(action.payload);
    },
    // increment: (state) => {
    //   state.count += 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.count += action.payload;
    // },
  },
});

export const { addToCart } = counterSlice.actions;
export default counterSlice.reducer;
