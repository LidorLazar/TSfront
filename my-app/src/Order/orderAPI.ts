import axios from "axios";
import Cart from "../model/cart";
import  DataAddress  from '../model/dataAddress'




export function createOrder(orderData: DataAddress, orderDetails: Cart[]) {
    const accessToken = JSON.parse(String(localStorage.getItem("token")))
    let config = {
        headers: {
            'Authorization': 'Bearer ' + accessToken
        }
    }
    return new Promise<{ data: any }>((resolve) =>
    axios.post('http://127.0.0.1:8000/api/checkout/', {'orderData': orderData, 'orderDetails': orderDetails}, config).then(res => resolve({data:res.data}))
    )

}