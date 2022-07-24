import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/products/";
export const usefetchProducts = createAsyncThunk(
  "products/usefetchProducts",
  async () => {
    //   const response = await axios.get(`https://fakestoreapi.com/products`)
    const response = await axios.get(BASE_URL );
    return response.data;
  }
);

export const fetchProductByLimit = createAsyncThunk(
  "products/fetchByIdStatus",
  async (limit, thunkAPI) => {
      const response = await axios.get(`https://fakestoreapi.com/products?limit=${limit}`)
      console.log(response)
    // const response = await axios.get(BASE_URL + `${productId}`);
    return response.data;
  }
);

const initialState = {
  entities: [],
  loading: "idle", //'idle' | 'pending' | 'succeeded' | 'failed'
};

const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: {
    [usefetchProducts.pending]: (state) => {
      state.loading = "pending"
    },
    [usefetchProducts.fulfilled]: (state, action) => {
      state.loading = "succeeded"
      state.entities = action.payload
    },
    [usefetchProducts.rejected]: (state) => {
      state.loading = "failed"
    },
    [fetchProductByLimit.fulfilled]: (state, action) => {
      state.loading = "succeeded"
      state.entities = action.payload
    },
  },
});

// export const { usefetchProducts } = productSlice.actions;
export default productsSlice.reducer;




// extraReducers: {
//   // Add reducers for additional action types here, and handle loading state as needed
//   // builder.addCase(usefetchProducts.fulfilled,
//   [usefetchProducts.fulfilled]: (state, action) => {
//     // Add user to the state array
//     state.entities = action.payload;
//     state.loading = "succeeded";
//     // state.entities.push(action.payload)
//     console.log(state)
//     // return {}
//   },
// //     builder.addCase(usefetchProducts.rejected, (state, action) => {
// //       // Add user to the state array
// //       state.loading = "failed";
// //     });
// },


// (builder) => {
//   builder.addCase(usefetchProducts.fulfilled, (state, action) => {
//     // state.entities = action.payload;
//     // state.loading = "succeeded";
//     state.entities.push(action.payload)
//     // console.log(state)
//   }),
//     builder.addCase(usefetchProducts.rejected, (state, action) => {
//       // Add user to the state array
//       state.loading = "failed";
//     });
// },