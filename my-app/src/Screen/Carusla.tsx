import React, {useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import  {selectProduct, GetAllProducttAsync} from '../Product/ProductSlice'
import { useAppSelector, useAppDispatch } from "../app/hooks";



const Carusel = () => {
    const image = useAppSelector(selectProduct);
    const dispatch = useAppDispatch()
    useEffect(() => { dispatch(GetAllProducttAsync()) }, [])
    const SERVER = "http://127.0.0.1:8000"
  
    const [imageCarusla, setImageCarusla] = useState('')
    const [imageCarusla2, setImageCarusla2] = useState('')
    const [imageCarusla3, setImageCarusla3] = useState('')
    useEffect(() => {
        if(image[0]){
            setImageCarusla(image[0].image)
            setImageCarusla2(image[1].image)
            setImageCarusla3(image[1].image3)
        }
    }, [])


return (
  <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
    <Carousel variant="dark" style={{width: '300px', height: '300px', justifyContent:'center', }}>
    <Carousel.Item interval={1000} >
     <img
        className="d-center w-30"
        src={'https://imageio.forbes.com/specials-images/imageserve/633b6c847b304297ba78b209/Kylian-Mbappe-of-Paris-Saint-Germain-reacts-after-scoring-during-match-against-OGC/0x0.jpg?format=jpg&crop=3261,1331,x0,y489,safe&height=1331&width=3261'}
        alt="First slide"
        style={{ width: "500px", height: "500px" }}
        />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>

    </Carousel.Item>
  </Carousel>

  </div>
  );
}
    


export default Carusel;