import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { selectLogged, loginAsync} from "./LoginSlicer";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { Form, Button } from 'react-bootstrap'



const Login = () => {
  const [user, setUser] = useState("");
  const [okStatus, setokStatus] = useState(200);
  const [password, setPassword] = useState("");
  const test = useAppSelector(selectLogged);
  const dispatch = useAppDispatch();


  return (
    <div>
  
      <h1>Login</h1>
      <Form >
      <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type='user'
                        placeholder='Enter email'
                        value={user}
                        onChange={(e) => setUser(e.target.value)} 
                    >
                      
                    </Form.Control>
                </Form.Group>

       <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                       </Form.Group>
      <br/>
      <h5>For registar <a href="/registar">click here</a></h5>
      <br/>
      <Button className="btn btn-outline-success" style={{margin: '20px'}} onClick={() => dispatch(loginAsync({user, password})) } >Login</Button>
      </Form>
    </div>
  );
};
export default Login;
