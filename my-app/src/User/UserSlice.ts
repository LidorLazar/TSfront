import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { GetUserPofile } from './UserAPI'


export interface UsertState {
  status: 'idle' | 'loading' | 'failed';
  name:string
  email:string
  admin:boolean
  username:string


}
const initialState: UsertState = {
  status: 'idle',
  name: '',
  email: '',
  admin: false,
  username: ''
};

export const GetUserPofileAsync = createAsyncThunk(
  'user/GetUserPofile',
  async () => {
    const response = await GetUserPofile();
    // The value we return becomes the `fulfilled` action payload
    return response
  }
);



export const UserSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {

  },

  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder.addCase(GetUserPofileAsync.fulfilled, (state, action) => {
    console.log(action.payload)
    state.name = action.payload.data.name
    state.email = action.payload.data.email
    state.username = action.payload.data.username
    state.admin = action.payload.data.admin


  })
}});

export const {  } = UserSlice.actions;
export default UserSlice.reducer;