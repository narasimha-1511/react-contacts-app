
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function isEmptyBlank(str) {
  // console.log("String Null : "+str === null);
  return str === null || str.match(/^ *$/) !== null;
}

export function ValidateEmail(email) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(mailformat)) {
    return true;
  }
  else {
    return false;
  }
}

function AddContact(props) {
  const [state, setState] = useState({
    name: "",
    email: "",
  });

  const navigate = useNavigate();

  const add = (e) => {
    e.preventDefault();
    // console.log("Correct Format email : "+ ValidateEmail(state.email));
    if (isEmptyBlank(state.email) || isEmptyBlank(state.name)) {
      alert("All the fields are mandatory");
      return;
    }
    else if(!(ValidateEmail(state.email))){
      alert("You have entered an invalid email address!");
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

