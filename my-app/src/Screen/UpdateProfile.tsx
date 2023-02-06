import React, { useState } from "react";
import { Form, FormControl, Button, Card, ListGroup } from "react-bootstrap";
import { useAppDispatch } from "../app/hooks";
import { UpdateDataUserProfileAsync } from '../User/UserSlice'

const UpdateProfile = () => {
  const [username, setUsername] = useState("user123");
  const [email, setEmail] = useState("user123@example.com");
  const [firstName, setFirstName] = useState("Moshe");
  const [city, setLastName] = useState("Tel aviv");
  const [phone, setPhone] = useState("555-555-5555");
  const [address, setAddress] = useState("Bazel 77");
  const [image, setImage] = useState("");
  const dispatch = useAppDispatch()


  return (
    <Card>
      <Card.Header>
        <h4>User Profile</h4>
      </Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Form>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <FormControl
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <FormControl
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <FormControl
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="phone">
                <Form.Label>Phone</Form.Label>
                <FormControl
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="address">
                <Form.Label>Address</Form.Label>
                <FormControl
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <Form.Label>City</Form.Label>
                <FormControl
                  type="text"
                  value={city}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file"  value={image} onChange={(e) => setImage(e.target.value)}/>
              </Form.Group>
              <Button variant="primary" onClick={()=> dispatch(UpdateDataUserProfileAsync({city}))}>
                Update
              </Button>
            </Form>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default UpdateProfile;

