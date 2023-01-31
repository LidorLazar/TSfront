import React, { useState } from 'react'
import { Table, Button } from "react-bootstrap";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useAppSelector } from "../app/hooks";
import { selectLogged } from "../Login/LoginSlicer";




const Reviews = () => {
  const [star, setStar] = useState(0)
  const [comment, setComment] = useState('')
  let logged = useAppSelector(selectLogged);

  return (
    <div>
{comment}
<Table striped bordered hover>
      <thead>
        <tr>
          <th colSpan={2}>Review</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Order ID</td>
          <td>fff</td>
        </tr>
        <tr>
          <td>Name</td>
          <td>
            <ul>
              
            </ul>
          </td>
        </tr>
        <tr>
          <td>review</td>
          <td>$$$$</td>
        </tr>

      </tbody>
    </Table>
    <div>
    <Stack spacing={1}>
  <Rating 
    name="half-rating" 
    defaultValue={2.5} 
    precision={0.5} 
    onChange={(e) => setStar(Number((e.target as HTMLInputElement).value))} 
  
  />
</Stack>
Comment:  <input onChange={(e)=>setComment(e.target.value)}/> <Button>Send</Button>
    </div>
    
    </div>
  )
}

export default Reviews