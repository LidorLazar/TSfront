import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import User from '../model/user';
import { GetUserPofile, UpdateDataUserProfile } from './UserAPI'


export interface UsertState {
  status: 'idle' | 'loading' | 'failed';
  name:string
  email:string
  is_superuser:boolean
  username:string
  image:string
  address:string
  city: string
  phoneNumber:string

  data: User[]

}
const initialState: UsertState = {
  status: 'idle',
  name: '',
  email: '',
  is_superuser: false,
  username: '',
  image: '',
  data: [],
  address: '',
  city: '',
  phoneNumber: '',

};

export const GetUserPofileAsync = createAsyncThunk(
  'user/GetUserPofile',
  async () => {
    const response = await GetUserPofile();
    // The value we return becomes the `fulfilled` action payload
    return response
  }
);

export const UpdateDataUserProfileAsync = createAsyncThunk(
  'user/UpdateDataUserProfile',
  async (data:any) => {
    const response = await UpdateDataUserProfile(data);
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
    state.is_superuser = action.payload.data.is_superuser
    state.image = action.payload.data.image
    state.address = action.payload.data.address
    state.city = action.payload.data.city
    state.phoneNumber = action.payload.data.phone_number
  }).addCase(UpdateDataUserProfileAsync.fulfilled, (state, action) => {
    console.log(action.payload)
  })
}});

export const {  } = UserSlice.actions;
export const SelectDataProfile = (state:RootState)=> state.user.data
export const SelectImage = (state:RootState)=> state.user.image
export default UserSlice.reducer;
