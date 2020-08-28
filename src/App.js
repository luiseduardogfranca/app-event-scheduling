import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { SendEvents } from "./components/SendEvents";
import { ListTracks } from "./components/ListTracks";
import { Container } from "./components/style";

function App() {
  const [tracks, setTracks] = useState([]);

  return (
    <Container>
      <SendEvents refreshEvents={setTracks}></SendEvents>
      <ListTracks tracks={tracks}></ListTracks>
    </Container>
  );
}

export default App;
