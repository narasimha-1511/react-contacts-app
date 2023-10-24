import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  const deleteHandler = (id) => {
    props.GetContactId(id);
  };
  const renderContactList = props.contact.map((contact) => {
    return (
      <ContactCard contact={contact} clickHandler={deleteHandler}></ContactCard>
    );
  });
  return (
    <div className="main">
      <h2>Contact List</h2>
      <Link to="/add">
        <button
          className="ui button blue right"
          style={{ position: "static", float: "right", marginTop: -50 }}
        >
          Add Contact
        </button>
      </Link>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};
export default ContactList;
