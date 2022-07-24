import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/productSlice";
import productsSlice from "./reducers/productsSlice";

// const loadPreLoadState = () => {
//     try {
//       const serializedstate = localStorage.getItem("store"); 
//       if (serializedstate) {
//         return JSON.parse(serializedstate);
//       } else {
//         return undefined;
//       }
//     } catch (error) {
//       return undefined;
//     }
//   };

export const store=configureStore({
    devTools: true,
    // preloadedState: loadPreLoadState(),
    reducer: {
        product:productSlice,
        products:productsSlice
    //   token: tokenReducer,
    //   cart: cartReducer,
    //   user:userReducer,
    },
})