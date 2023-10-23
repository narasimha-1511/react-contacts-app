import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const deleteHandler = (id) => {
    props.GetContactId(id);
  };
  const renderContactList = props.contact.map((contact) => {
    return (
      <ContactCard contact={contact} clickHandler={deleteHandler}></ContactCard>
    );
  });
  return <div className="ui celled list">{renderContactList}</div>;
};
export default ContactList;
