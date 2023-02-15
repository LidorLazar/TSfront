import React, { useState } from 'react';
import {Button,Form, ListGroup} from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {selectCart} from '../Cart/CartSlice'
import PaypalButton from './PaypalButton';
import {createNewOrderAsync} from '../Order/OrderSlicer'
import { useAppDispatch, useAppSelector } from '../app/hooks';





function OffCanvasExample() {
  const [show, setShow] = useState(false);
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [zip_code, setZip_code] = useState('')
  const [country, setCountry] = useState('')
  const cart = useAppSelector(selectCart)
  const dispatch = useAppDispatch()


  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  const sumbitHandler = (e: any) => {
    e.preventDefault()
    const orderData = {
        address,
        city,
        zip_code,
        country
    };

    dispatch(createNewOrderAsync({ orderData, orderDetails: cart }));
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
  <Form>
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
        value={zip_code ? zip_code : ""}
        onChange={(e) => setZip_code(e.target.value)}
      />
      <br />

       <PaypalButton/>
    </Form.Group>
  </Form>
  <Button onClick={sumbitHandler}>click</Button>
</Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default OffCanvasExample;
