import React from "react";
import Dedication from "./Dedication";

class DedicationList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dedications: [{ id: 0, message: "", name: "" }]
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
      const { name, message, id } = dedication;
      return <Dedication key={id} name={name} message={message} />;
    });
  }

  render() {
    return <div>{this.renderDedications()}</div>;
  }
}

export default DedicationList;
