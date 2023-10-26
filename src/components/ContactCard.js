import React from "react";
import user from "../images/user.png";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item" style={{ padding: "10px", position: "relative" }}>
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <Link to={`/edit/${id}`}>
        <i
          className='edit alternate outline icon'
          style={{
            position: 'absolute',
            right: '36px',
            top: '45%',
            transform: 'translateY(-50%)',
          }}
        ></i>
      </Link>
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
