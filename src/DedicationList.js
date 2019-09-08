import React from "react";
import Dedication from "./Dedication";

class DedicationList extends React.Component {
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

  renderDedications() {
    return this.state.dedications.map(dedication => {
      const { name, message } = dedication;
      return <Dedication name={name} message={message} />;
    });
  }

  render() {
    return <div>{this.renderDedications()}</div>;
  }
}

export default DedicationList;
