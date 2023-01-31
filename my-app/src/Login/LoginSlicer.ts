import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../app/store";
import  {loginUser, RegisterUser, logOutUser}  from "./LogAPI";

export interface LoginState {
  logged: boolean;
  token: String
  username: string,
  status: Number

}

const initialState: LoginState = {
  logged: false,
  token: '',
  username: '',
  status: 0

};

export const loginAsync = createAsyncThunk(
  "login/loginUser",
  async (detalis:any) => {
    const response = await loginUser(detalis);
    return response;
  }
);
export const registerAsync = createAsyncThunk(
 "login/RegisterUser",
  async (detalis: any) => {
  const response = await RegisterUser(detalis);
  return response;
});



export const logOutAsync = createAsyncThunk(
  "login/logOutUser",
   async () => {
   const response = await logOutUser();
   return response;
 });


export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    getToken: (state)=> {if(localStorage.getItem("token") || "") {state.token = localStorage.getItem("token") || ""}},
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.token = action.payload.data['refresh']
        state.username =action.payload.data['username']
        state.status =action.payload.status
        localStorage.setItem('token', JSON.stringify(action.payload.data['refresh']))
        localStorage.setItem('name', JSON.stringify(action.payload.data['username']))
        localStorage.setItem('admin', JSON.stringify(action.payload.data['admin']))
        state.logged = true;


      })
      .addCase(registerAsync.fulfilled, (state, action) => {
        console.log(action.payload);
      }).addCase(logOutAsync.fulfilled, (state, action) => {
        localStorage.clear()
        setTimeout(function() {
          window.location.replace("/");
        }, 1000);
        state.logged = false;
      });
  },
});

export const { getToken } = loginSlice.actions;
export const selectLogged = (state: RootState) => state.login.logged;
export const selectToken = (state: RootState) => state.login.token;
export const selectUser = (state: RootState) => state.login.username;
export const selectStatus = (state: RootState) => state.login.status;
export default loginSlice.reducer;