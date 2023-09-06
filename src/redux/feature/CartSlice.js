import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart: [],

};


export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let find = state.cart.findIndex((item) => item.id === action.payload.id);
            if (find >= 0) {
                state.cart[find].quantity += 1
            } else {

                state.cart.push({ ...action.payload, quantity: 1 });
            }

        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },
        increaseQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 }
                }
                return item
            });

        },
        decreaseQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity - 1 }

                }
                if (state.cart.quantity < 1) {
                    state.cart = state.cart.filter((item) => item.id !== action.payload)
                }
                return item
            });

        },


    }
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, getTotals } = cartSlice.actions;
export default cartSlice.reducer;