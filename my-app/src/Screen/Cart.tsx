import React, {useState, useEffect} from "react";
import { Offcanvas, Card, Button } from "react-bootstrap";
import {selectCart, deletFromCart, addOneQty, removeOneOty} from '../Cart/CartSlice'
import { useAppSelector, useAppDispatch } from "../app/hooks";


const Cart = () => {
    const cart = useAppSelector(selectCart);
    const dispatch = useAppDispatch()
    const SERVER = 'http://127.0.0.1:8000'
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [cartProd, setcartProd] = useState<{ id: string; qty: number; price: number ;image: string, product_name: string}[]>([]);
    let total = 0;
    useEffect(() => {
        const getCartFromLocalStorage = localStorage.getItem("cart");
        if (getCartFromLocalStorage) {
            setcartProd(JSON.parse(getCartFromLocalStorage));
        }
        if(cart.length){
            handleShow() 
        }
    }, [cart]);


  return (
    <div>  
    <i className="fas  fa-shopping-cart" onClick={handleShow}></i>
    cart
    <Offcanvas show={show} onHide={handleClose} placement={'end'}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title><i className="fas  fa-shopping-cart"></i>cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                {cartProd.map((product, index) => {
        total += product.price * product.qty;
        return (
          <Card key={index}>
            <Card.Img className="d-block mx-auto" variant="top" src={SERVER+product.image} style={{width:'100px', height:'100px', textAlign:'center'}}/>
            <Card.Body>
              <Card.Title>{product.product_name}</Card.Title>
              <Card.Text>
                Quantity: {product.qty} <br />
                Price per qty: {product.price}
              </Card.Text>
              <Button onClick={()=> dispatch(addOneQty(product.id))}
                className='btn btn-outline-success'
              >
                +
              </Button>
              <Button onClick={()=> dispatch(removeOneOty(product.id))}
                className='btn btn-outline-success'
              >
               -
              </Button>
              <Button onClick={()=> dispatch(deletFromCart(product.id))}
                variant="danger"
              >
                Remove
              </Button>
            </Card.Body>
          </Card>
        );
      })}
      <h3>Total: {total}$</h3>
                </Offcanvas.Body>
            </Offcanvas>
        </div>

  );
};

export default Cart;