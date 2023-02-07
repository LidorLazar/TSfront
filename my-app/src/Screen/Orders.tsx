import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {GetUserOrderAsync, SelectOrderData } from '../User/UserSlice'




const Order = () => {
  const orderData = useAppSelector(SelectOrderData)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(GetUserOrderAsync())

}, [])


  return (
    <div>
    {orderData.map((item, index) => <div key={item.id}>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th colSpan={2}>Order Information</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Order ID</td>
          <td>{item.id}</td>
        </tr>
        <tr>
          <td>total</td>
          <td>
            <ul>
              {item.total}$
            </ul>
          </td>
        </tr>
        <tr>
          <td>date</td>
          <td>{item.create_order}</td>
        </tr>
      </tbody>
    </Table>
    </div>)}
    </div>
  );
};

export default Order;
