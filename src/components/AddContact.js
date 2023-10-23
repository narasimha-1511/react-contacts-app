import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.email === "" || this.state.name === "") {
      alert("All the fields are mandatory");
      return;
    }
    this.props.addcontact(this.state);
    this.setState({ name: "", email: "" });
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" action="#" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              value={this.state.name}
              placeholder="Name"
              name="name"
              type="text"
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            ></input>
          </div>
          <div className="field">
            <label>Email</label>
            <input
              placeholder="Email"
              name="email"
              type="text"
              value={this.state.email}
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            ></input>
          </div>
          <button className="ui blue button">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
