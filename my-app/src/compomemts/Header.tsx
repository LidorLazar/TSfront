import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { selectLogged, selectUser, selectToken } from "../Login/LoginSlicer";
import { useAppSelector } from "../app/hooks";
import User from "../Screen/User";
import { toast, Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "../Screen/Cart";

const Header = () => {
  const [getToken, setGetToken] = useState("");
  const [username, setUserName] = useState("");
  let logged = useAppSelector(selectLogged);
  let toke = useAppSelector(selectToken);

  // Navbar / Nevigatin bar
  useEffect(() => {
    
    if (!getToken) {
      // const tok = localStorage.getItem("token");
      // setGetToken(JSON.parse(String(tok)));
      const userInlocalStorge = localStorage.getItem("username");
      // setUserName(JSON.parse(String(userInlocalStorge)));

      if (logged) {
        toast.success(`Welcome ${""}${userInlocalStorge}`, {
          position: toast.POSITION.TOP_CENTER,
        });
        // setTimeout(function () {
        //   window.location.replace("/");
        // }, 1000);
      }
    }
  }, [logged]);
console.log(toke)
  return (
    <div>
      <ToastContainer transition={Slide} />
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src="..\logo.jpeg" style={{ height: "20px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link href="#pricing">About Us</Nav.Link>
              <NavDropdown title="Category" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/category/1">
                  Soocer shoes
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/category/2">
                  Ball
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              {/* <Nav.Link href="/cart"> <Cart/></Nav.Link> */}
              {getToken ? (
                <User />
              ) : (
                <Nav.Link href="/login">
                  <i className="fa-solid fa-user"></i>Login
                </Nav.Link>
              )}
            </Nav>
            <Nav>
              <Nav.Link>
                <Cart />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
