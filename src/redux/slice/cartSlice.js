import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    data: []
  },
  reducers: {
    addToCart: (state, action) => {
      // get data with id from payload (from Header)
      const data = state.data.find(data => data.id === action.payload.id)
      if (data) {
        data.qty = data.qty + 1
      } else {
        state.data.push(action.payload)
      }
    },
    plusQuantity: (state, action) => {
      const data = state.data.find(data => data.id === action.payload.id)
      if (data) {
        data.qty = data.qty + 1
      }
    },
    minusQuantity: (state, action) => {
      const data = state.data.find(data => data.id === action.payload.id)
      if (data) {
        if (data.qty === 1) {
          return { ...state, data: state.data.filter(data => data.id !== action.payload.id) }
        } else {
          data.qty = data.qty - 1
        }
      }
    }
  }
})


export const { addToCart, plusQuantity, minusQuantity } = cartSlice.actions
export default cartSlice.reducer