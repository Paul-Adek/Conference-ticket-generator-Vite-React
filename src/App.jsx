import React from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import FormComp from "./components/FormComp";
import { useState } from "react";
import TicketComp from "./components/TicketComp";

function App() {

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({});

  // if form is submitted
  const handleSubmit = (data) => {
    setSubmitted(true);
    setFormData(data);
  };


  return (
    <>
      <Container>
        {submitted ? (<TicketComp formData={formData} />) :
          (
            <>
              <Header />
              <FormComp onSubmit={handleSubmit} />
            </>
          )
        }
      </Container>
    </>
  )
}
export default App