import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../app/store";
import  {loginUser, RegisterUser, logOutUser}  from "./LogAPI";
import jwt_decode from "jwt-decode";

export interface LoginState {
  logged: boolean;
  token: String
  username: string,
  status: Number
  is_superuser: boolean

}

const initialState: LoginState = {
  logged: false,
  token: '',
  username: '',
  status: 0,
  is_superuser: false

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
        interface JwtPayload {
          exp: number;
          iat: number;
          jti: string;
          token_type: string;
          user_id: number;
          username: string;
          is_superuser: boolean;
        }  
        const decoded = jwt_decode(action.payload.data.access) as JwtPayload;
        console.log(jwt_decode(action.payload.data.access))
        state.token = action.payload.data['refresh']
        state.username =decoded.username
        state.is_superuser = decoded.is_superuser
        localStorage.setItem('token', JSON.stringify(state.token))
        localStorage.setItem('username', JSON.stringify(state.username))
        localStorage.setItem('admin', JSON.stringify(state.is_superuser))
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
export const selectAdmin = (state: RootState) => state.login.is_superuser;
export default loginSlice.reducer;