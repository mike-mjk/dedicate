import React from "react";

class CreateDedication extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("name is ", this.state.name);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          ></input>
        </label>
      </form>
    );
  }
}

export default CreateDedication;
