import React from "react";
import "./App.css";
import CreateDedication from "./CreateDedication";
import Dedication from "./Dedication";

function App() {
  return (
    <React.Fragment>
      <CreateDedication />
      <Dedication message="I dedicate this to Jasmine" name="Mike" />
    </React.Fragment>
  );
}

export default App;
