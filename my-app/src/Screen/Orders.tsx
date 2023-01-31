import React from "react";
import { Table } from "react-bootstrap";

const Order = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th colSpan={2}>Order Information</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Order ID</td>
          <td>fff</td>
        </tr>
        <tr>
          <td>Items</td>
          <td>
            <ul>
              
            </ul>
          </td>
        </tr>
        <tr>
          <td>Total</td>
          <td>$$$$</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Order;
