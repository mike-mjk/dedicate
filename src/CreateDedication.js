import React from "react";

class CreateDedication extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: "", message: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    console.log(event);
    event.preventDefault();
    fetch("/api/create_dedication", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          ></input>
        </label>
        <label>
          Message
          <input
            type="text"
            name="message"
            value={this.state.message}
            onChange={this.handleChange}
          ></input>
        </label>
        <input type="submit"></input>
      </form>
    );
  }
}

export default CreateDedication;
