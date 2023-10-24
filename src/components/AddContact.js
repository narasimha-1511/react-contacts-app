
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddContact(props) {
  const [state, setState] = useState({
    name: "",
    email: "",
  });

  const navigate = useNavigate();

  const add = (e) => {
    e.preventDefault();
    if (state.email === "" || state.name === "") {
      alert("All the fields are mandatory");
      return;
    }
    props.addcontact(state);
    setState({ name: "", email: "" });
    navigate("/");
  };

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            value={state.name}
            placeholder="Name"
            name="name"
            type="text"
            onChange={(e) => {
              setState({ ...state, name: e.target.value });
            }}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            placeholder="Email"
            name="email"
            type="text"
            value={state.email}
            onChange={(e) => {
              setState({ ...state, email: e.target.value });
            }}
          />
        </div>
        <button className="ui blue button">Add</button>
      </form>
    </div>
  );
}

export default AddContact;

