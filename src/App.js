import React from "react";
import "./App.css";
import CreateDedication from "./CreateDedication";
import DedicationList from "./DedicationList";

function App() {
  return (
    <React.Fragment>
      <CreateDedication />
      <DedicationList />
    </React.Fragment>
  );
}

export default App;
