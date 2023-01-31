import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const Profile = () => {
  return (
    <Card>
      <Card.Header as="h2">Profile Information</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Name: </ListGroup.Item>
        <ListGroup.Item>Email: </ListGroup.Item>
        <ListGroup.Item>Phone: </ListGroup.Item>
        <ListGroup.Item>Address: </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default Profile;
