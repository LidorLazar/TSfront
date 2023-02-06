import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import {registerAsync, selecStatus} from "../Login/LoginSlicer";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';



const RegisterPage =()=> {
    const dispatch = useAppDispatch()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordconfirm, setPasswordConfirm] = useState("")
    const [email, setEmail] = useState("")
    const [city, setCity] = useState("")
    const [address, setAddress] = useState("")
    const isValid = password === passwordconfirm;
    const status = useAppSelector(selecStatus) === 200


  return (

    <Container className="my-5">
       <ToastContainer/>
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center mb-4">Register</h2>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} required onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
            </Form.Group>

            <Form.Group controlId="formBasicPasswordConfirm">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password"  value={passwordconfirm} placeholder="Confirm Password" onChange={(e) => setPasswordConfirm(e.target.value)} required/>
            </Form.Group>

            <Form.Group controlId="formBasicUserName">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter your Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
            </Form.Group>
            
            <Form.Group controlId="formBasicAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter your address" value={address} onChange={(e) => setAddress(e.target.value)} required/>
            </Form.Group>


            <Form.Group controlId="formBasicCity">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Enter your Username" value={city} onChange={(e) => setCity(e.target.value)} required/>
            </Form.Group>

            <br/>
            {isValid &&
            <Button variant="primary"  className="btn btn-outline-success" onClick={()=> dispatch(registerAsync({password, email, username, address, city}))}>
              Register
            </Button> || 'The password not equel'}
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default RegisterPage;
