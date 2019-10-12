import React from "react";
import "./App.css";
import CreateDedication from "./CreateDedication";
import DedicationList from "./DedicationList";

function App() {
  return (
    <React.Fragment>
      <h1>Formally dedicate your time to a friend or loved one</h1>
      <CreateDedication />
      <DedicationList />
    </React.Fragment>
  );
}

export default App;
