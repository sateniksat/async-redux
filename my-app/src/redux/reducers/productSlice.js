import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

// const BASE_URL = "https://fakestoreapi.com/products/";~
export const fetchProductById = createAsyncThunk(
  "products/fetchByIdStatus",
  async (productId, thunkAPI) => {
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
      console.log(response)
    // const response = await axios.get(BASE_URL + `${productId}`);
    return response.data;
  }
);



const initialState = {
  entities: [],
  loading: "idle", //'idle' | 'pending' | 'succeeded' | 'failed'
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers:{
    [fetchProductById.pending]: (state) => {
      state.loading = "pending"
    },
    [fetchProductById.fulfilled]: (state, action) => {
      state.loading = "succeeded"
      state.entities = action.payload
    },
    [fetchProductById.rejected]: (state) => {
      state.loading = "failed"
    }
  },
});

// export const { fetchProductById } = productSlice.actions;
export default productSlice.reducer;