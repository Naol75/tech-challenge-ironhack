import service from "../../service.config";
import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { ListGroup, ListGroupItem } from "react-bootstrap";

function PhoneDetails({ phoneId }) {
  const [phoneDetails, setPhoneDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getPhoneDetails();
  }, [phoneId]);

  const getPhoneDetails = async () => {
    setIsLoading(true);
    try {
      const response = await service.get(`api/${phoneId}`);
      setTimeout(() => {
        setPhoneDetails(response.data);
        setIsLoading(false);
      }, 500);
    } catch (error) {
      console.error("Error fetching the phone details:", error);
    }
  };

  if (isLoading) {
    return <Spinner animation="border" />;
  }

  if (phoneDetails === null) {
    return <div>Phone details not found.</div>;
  }

  const {
    name,
    manufacturer,
    description,
    color,
    price,
    screen,
    processor,
    ram,
    imageFileName,
  } = phoneDetails;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageFileName} />
      <Card.Body>
        <Card.Title>
          {name} by {manufacturer}
        </Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Color: {color}</ListGroupItem>
        <ListGroupItem>Screen: {screen}</ListGroupItem>
        <ListGroupItem>
          Processor: {processor}. RAM: {ram}
        </ListGroupItem>
        <ListGroupItem>Starting from: {price}€</ListGroupItem>
      </ListGroup>
    </Card>
  );
}

export default PhoneDetails;