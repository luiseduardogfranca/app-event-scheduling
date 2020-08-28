import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { SendEvents } from "./components/SendEvents";
import { ListTracks } from "./components/ListTracks";

function App() {
  const [tracks, setTracks] = useState([]);

  return (
    <div>
      <SendEvents refreshEvents={setTracks}></SendEvents>
      <ListTracks tracks={tracks}></ListTracks>
    </div>
  );
}

export default App;
