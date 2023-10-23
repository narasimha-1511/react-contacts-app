import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item" style={{ padding: "10px" }}>
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{
          color: "red",
          position: "sticky",
          marginTop: "7px",
          float: "right",
        }}
        onClick={() => {
          props.clickHandler(id);
        }}
      ></i>
    </div>
  );
};

export default ContactCard;
