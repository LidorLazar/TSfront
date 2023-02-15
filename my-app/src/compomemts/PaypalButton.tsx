import React, {useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { toast } from "react-toastify";
import {selectCart} from "../Cart/CartSlice";
import { useAppSelector, useAppDispatch } from "../app/hooks";


const PaypalButton = () => {
  const cart = useAppSelector(selectCart)
  let totalPrice = 0
  const dispatch = useAppDispatch()

//   const sumbitHandler = (e: any) => {
//     e.preventDefault()
//     const orderData = {
//         address:'test',
//         city:'test',
//         zip_code:'yesy',
//         country:'test'
//     };

//     dispatch(newOrderAsync({ orderData, orderDetails: cart }))
//     }

  useEffect(() => {
    for (let index = 0; index < cart.length; index++) {
      totalPrice += Math.round(cart[index].price * cart[index].qty+Number.EPSILON) * 100/100
    }
  }, [cart])
  


  return (
    <div>
      <PayPalScriptProvider
        options={{
          "client-id":
            "AT_RMGrGtqhVq-71qKQiqGSgox1JmeVTRco64KeCMqaWOs7jRnSEI40iuG_jpyHsJnzbHNUf0ueCPtqi",
        }}
      >
        <PayPalButtons
           style= {{layout: 'vertical'}}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: { value:  totalPrice.toString()},
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            if (actions.order) {
              return actions.order.capture().then(details => {
                toast.success(
                  'Payment completed. Thank you ' + (details.payer.name?.given_name || ''),{
                    position: toast.POSITION.TOP_CENTER
                  }
                );
              });
            }
            return Promise.resolve();
          }}
          
          onCancel={() => {
            toast.error("You canelled the payment", {
              position: toast.POSITION.TOP_CENTER,
            });
          }}
          onError={() => {
            toast.error("There was an error with your payment, Try again", {
              position: toast.POSITION.TOP_CENTER,
            });
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
};

export default PaypalButton;
// function newOrderAsync(arg0: { orderData: { address: any; city: any; zip_code: any; country: any; }; orderDetails: import("../model/cart").default[]; }): any {
//   throw new Error("Function not implemented.");
// }

// function dispatch(arg0: any) {
//   throw new Error("Function not implemented.");
// }

