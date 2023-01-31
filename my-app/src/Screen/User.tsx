import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav,NavDropdown } from "react-bootstrap";
import { logOutAsync, selectLogged } from '../Login/LoginSlicer'
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Link } from "react-router-dom";
import { toast, Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const User = () => {
    const [username, setUserName] = useState('')
    const [getToken, setGetToken] = useState('')
    const [admin, setAdmin] = useState(false)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if(!getToken){
          const tok = localStorage.getItem("token")
          setGetToken(JSON.parse(String(tok)))
          const userInlocalStorge = localStorage.getItem("name")
          setUserName(JSON.parse(String(userInlocalStorge)))
          const isAdmin = localStorage.getItem("admin")
          setAdmin(JSON.parse(String(isAdmin)))
        }
      }, [])


  return (
    <div>
      <ToastContainer transition={Slide}/>
      <NavDropdown title={username } id="collasible-nav-dropdown" >
        <NavDropdown.Item as={Link} to="/profile/">Profile</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/orders/">Orders</NavDropdown.Item>
        {admin &&  <NavDropdown.Item href="http://localhost:8000/admin/">Admin panel</NavDropdown.Item>}
        <NavDropdown.Item  onClick={()=> {dispatch(logOutAsync());  toast.error("LogOut", {
          position: toast.POSITION.TOP_CENTER,
        });; }}>LogOut</NavDropdown.Item>
      </NavDropdown>

    </div>
  );
};

export default User;
