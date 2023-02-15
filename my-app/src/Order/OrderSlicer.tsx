import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Cart from'../model/cart'
import { createNewOrder } from './OrderApi';
import OrderData from '../model/orderData';
import { Action } from '@remix-run/router';
import { RootState } from '../app/store';



export interface OrderState {
  order: []
  address:string
  city:string
  country:string
  postalCaode:string
}

const initialState: OrderState = {
  order: [],
  address: '',
  city: '',
  country: '',
  postalCaode: ''
};



export const createNewOrderAsync = createAsyncThunk(
  'order/newOrder', 
  async(data: {orderData: OrderData, orderDetails: Cart[]}) => {
      const total = data.orderDetails.reduce((accumulate, item) => accumulate + item.price * item.qty, 0)
      const quantity = data.orderDetails.reduce((accumulate, item) => accumulate + item.qty, 0)
      const orderDataWithTotalAndQuantity = {...data.orderData, total, quantity}
      const response = await createNewOrder(orderDataWithTotalAndQuantity, data.orderDetails)
      return response.data;
}
)


export const orderSlice = createSlice({
  name: 'order', 
  initialState, 
  reducers: {
    NewAddress: (state, action) => {state.address = action.payload},
    NewCity: (state, action) => {state.city = action.payload},
    NewCountry: (state, action) => {state.country = action.payload},
    NewPostalCode: (state, action) => {state.postalCaode = action.payload}
  }, 
  extraReducers: (builder) => {
      builder.addCase(createNewOrderAsync.fulfilled, (state, action) => {
        console.log(action.payload.user)
          state.order = action.payload
      })
}
})


export const { NewAddress, NewCity, NewCountry, NewPostalCode } = orderSlice.actions; 
export const SelectNewAddress = (state:RootState)=> state.order.address
export const SelectNewCity = (state:RootState)=> state.order.city
export const SelectCountry = (state:RootState)=> state.order.country
export const SelectPostalCaode = (state:RootState)=> state.order.postalCaode

export default orderSlice.reducer;