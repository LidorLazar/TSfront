import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Cart from'../model/cart'
import { createNewOrder } from './OrderApi';
import OrderData from '../model/orderData';



export interface OrderState {
    order: []
  }

const initialState: OrderState = {
    order: []
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
    reducers: {}, 
    extraReducers: (builder) => {
        builder.addCase(createNewOrderAsync.fulfilled, (state, action) => {
          console.log(action.payload)
            state.order = action.payload
        })
}
})


export const { } = orderSlice.actions; 
export default orderSlice.reducer;