import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slice/cartSlice'
import productReducer from './slice/productSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer
  }
})

// console.log("oncreate store : ", store.getState())

// store.subscribe(() => console.log("store change : ", store.getState()))

export default store