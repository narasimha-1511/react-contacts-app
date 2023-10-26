import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import EditContact from "./EditContact";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState([]);

  function AddContactHandler(contact) {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  function updateContactHandler(id, name, email) {
    const newContact = contacts.map((contact) => {
      if (contact.id == id) {
        return {...contact, name: name, email: email }
      }
      return contact
    })

    setContacts(newContact)
  }

  useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    console.log(retrieveContacts);
    if (retrieveContacts) {
      setContacts(retrieveContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ContactList
                contact={contacts}
                GetContactId={removeContactHandler}
              />
            }
          />
          <Route
            path="/add"
            element={<AddContact addcontact={AddContactHandler} />}
          />
          <Route
            path="/edit/:id"
            element={
              <EditContact
                contacts={contacts}
                update={updateContactHandler}
                key={LOCAL_STORAGE_KEY}
              />
            }
          />
        </Routes>
        {/* <AddContact addcontact={AddContactHandler} />
       
        <ContactList contact={contacts} GetContactId={removeContactHandler} /> */}
      </Router>
    </div>
  );
}

export default App;
