import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    data: [
      {
        id: 2,
        title: 'Baju'
      }
    ]
  },
  reducers: {
    addToCart: (state, action) => {
      // return [
      //   ...state.data, { id: action.payload.id, title: action.payload.title }
      // ]
      state.data.push(action.payload)
      // return state.data
    }

  }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer