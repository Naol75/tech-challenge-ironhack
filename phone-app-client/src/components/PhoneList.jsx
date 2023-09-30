import { ListGroup, ListGroupItem } from "react-bootstrap"
import { Spinner } from "react-bootstrap";

function PhoneList({phones, phoneId, setPhoneId}) {

  const handlePhoneClick = (id) => {
    setPhoneId(id)
  }

  if (phones === null) {
    return <Spinner/>
  }

  return (
    <ListGroup>
    {phones === null && <Spinner/>}
      {phones.map(({id, name}) => {
        return (
          <ListGroup.Item
          key={id}
          onClick={() => handlePhoneClick(id)}
          variant={phoneId === id ? "success" : "light"}
          className="list-item"
          >
            {name}
          </ListGroup.Item>
        );
  })}
   
    </ListGroup>
  );
}

export default PhoneList