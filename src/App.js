import React from "react";
import "./App.css";

function App() {
  function getMessage() {
    fetch("http://localhost:3000/api/hello")
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        console.log(json);
        return json;
      });
  }
  return <button onClick={getMessage}> click</button>;
}

export default App;
