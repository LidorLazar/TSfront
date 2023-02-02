
import React, {useEffect, useState} from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../app/hooks';
import {GetUserPofileAsync } from '../User/UserSlice'
import UpdateProfile from "./UpdateProfile";


const UserProfile = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {dispatch(GetUserPofileAsync())}, []);
  const {name, username, admin, email}= useAppSelector((state)=> state.user)



  return (
    <div>
    <Card>
      <Card.Header as="h2">Profile Information</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Name: {name} </ListGroup.Item>
        <ListGroup.Item>Email: {email}</ListGroup.Item>
        <ListGroup.Item>admin: {String(admin)}</ListGroup.Item>
        <ListGroup.Item>username: {username}</ListGroup.Item>
      </ListGroup>
    </Card>
    <br/>
    <br/>
    <br/>
    <br/>
    <Button>Update Profile</Button>
    </div>
  );
};

export default UserProfile;

