import { useState, useEffect } from "react";
import "./App.css";
import PhoneDetails from "./components/PhoneDetails";
import PhoneList from "./components/PhoneList";
import { Spinner } from "react-bootstrap";
import service from "../service.config";



function App() {
  const [phones, setPhones] = useState(null);
  const [phoneId, setPhoneId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const getPhonesList = async () => {
    const response = await service.get(`/api/phones`);
    try {
      setTimeout(() => {
        setIsLoading(false);
        setPhones(response.data);
      }, 500);
    } catch (error) {
      setErrorMessage("Error fetching phones...");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPhonesList();
  }, []);

  return (
    <>
      <div className="app">
        {isLoading && <Spinner animation="border" variant="info" />}
      </div>
      <div className="app">{errorMessage && errorMessage}</div>
      <div className="page">
        <div className="phoneList">
          <PhoneList
            phones={phones}
            phoneId={phoneId}
            setPhoneId={setPhoneId}
            errorMessage={errorMessage}
          />
        </div>
        <div className="phoneDetails">
          {phoneId ? (
            <PhoneDetails phoneId={phoneId} errorMessage={errorMessage} />
          ) : (
            <h3>Click on any phone to display its details</h3>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
