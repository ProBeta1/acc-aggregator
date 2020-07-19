import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing"

function App() {
  return (
    <div className="App">
    <div className="nav">
      <NavBar />
    </div>
    <Landing />
    </div>
  );
}

export default App;
