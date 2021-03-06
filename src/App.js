import React from "react";
import "./App.css";
import CreateDedication from "./CreateDedication";
import DedicationList from "./DedicationList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dedications: [{ message: "", name: "" }]
    };
  }

  componentDidMount() {
    fetch("/api/get_dedications")
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log(json);
        this.setState({ dedications: json });
      });
  }
  render() {
    const { message, name } = this.state.dedications[0];
    return (
      <React.Fragment>
        <CreateDedication />
        <DedicationList />
      </React.Fragment>
    );
  }
}

export default App;
