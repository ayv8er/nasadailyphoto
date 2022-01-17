import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL, API_KEY } from "../constants/index";
import { Container } from "reactstrap";
import Photo from "./Photo";
import Header from "./Header";
import Calendar from "./Calendar";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(
          `We're experiencing technical difficulties, please try again...`
        );
      });
  }, []);

  const dateSelect = (input) => {
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}&date=${input}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(
          `We're experiencing technical difficulties, please try again...`
        );
      });
  };

  return (
    <Container fluid>
      {error && <h1>{error}</h1>}
      <Header />
      <Calendar dateSelect={dateSelect} />
      <Photo
        explanation={data.explanation}
        photo={data.url}
        title={data.title}
        copyright={data.copyright}
      />
    </Container>
  );
}

export default App;
