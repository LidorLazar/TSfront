import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { selectProduct, GetAllProducttAsync } from "./ProductSlice";
import { Card } from "react-bootstrap";
import { Link} from "react-router-dom";





export function Product() {
  const product = useAppSelector(selectProduct);
  const dispatch = useAppDispatch();
  useEffect(() => { dispatch(GetAllProducttAsync()) }, [])
  return (
    <div>
     {product.length}
    </div>
  );
}
