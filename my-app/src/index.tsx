import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "../src/bootstrap.min.css";
import Header from "./compomemts/Header";
import Footer from "./compomemts/Footer";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import OneProduct from "./Screen/OneProduct";
import "../src/index.css";
import Category from "./Screen/Category";
import Login from "./Login/Login";
import RegisterPage from "./Screen/Registar";
import Profile from "./Screen/UserProfile";
import Orders from "./Screen/Orders";
import UserProfile from "./Screen/UserProfile";
import UpdateProfile from "./Screen/UpdateProfile";
import Page404 from "./Screen/Page404";


const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(


  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
        <Outlet/>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="product/:id" element={<OneProduct />} />
            <Route path="category/:id" element={<Category />} />
            <Route path="login/" element={<Login />} />
            <Route path="registar/" element={<RegisterPage />} />
            <Route path="orders/" element={<Orders />} />
            <Route path="profile/" element={<UserProfile />} />
            <Route path="profile/update" element={<UpdateProfile />} />
            <Route path="*" element={<Page404/>} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  </Provider>
);
