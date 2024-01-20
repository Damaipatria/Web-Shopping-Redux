import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getProduct = createAsyncThunk('product/getProduct', async () => {
  return await fetch('https://fakestoreapi.com/products').then((res) => res.json())
})

const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: []
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.data = action.payload
    })
  }
})

export default productSlice.reducer