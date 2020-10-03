import React from "react";
import Restraunts from "./Components/Restraunts/Restraunts";
import { Container } from "./appStyles";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <Container className="App">
      <Restraunts />
    </Container>
  );
}

export default App;
