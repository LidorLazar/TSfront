import React, { useState } from 'react';
import {Button,Form, ListGroup} from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';



function OffCanvasExample() {
  const [show, setShow] = useState(false);
  const [address, setAddress] = useState()
  const [city, setCity] = useState()
  const [postalCode, setPostalCode] = useState()
  const [country, setCountry] = useState()


  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  }
  return (
    <div>
      <Button variant="primary" onClick={toggleShow} type="button" className="btn btn-lg btn-primary  me-2 Enable both scrolling & backdrop">
        proceed to check out
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement={'end'} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shipping</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
  <Form onSubmit={handelSubmit}>
    <Form.Group controlId="address">
      <ListGroup.Item>
        <Form.Label>Address</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Enter address"
          value={address ? address : ""}
          onChange={(e) => setAddress(e.target.value)}
        />
      </ListGroup.Item>
      <Form.Label>City</Form.Label>
      <Form.Control
        required
        type="text"
        placeholder="Enter city"
        value={city ? city : ""}
        onChange={(e) => setCity(e.target.value)}
      />
      <Form.Label>Country</Form.Label>
      <Form.Control
        required
        type="text"
        placeholder="Enter country"
        value={country ? country : ""}
        onChange={(e) => setCountry(e.target.value)}
      />
      <Form.Label>Postal Code</Form.Label>
      <Form.Control
        required
        type="text"
        placeholder="Enter postal code"
        value={postalCode ? postalCode : ""}
        onChange={(e) => setPostalCode(e.target.value)}
      />
      <br />
      <Button type="submit" variant="primary">
        Continue
      </Button>
    </Form.Group>
  </Form>
</Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default OffCanvasExample;
