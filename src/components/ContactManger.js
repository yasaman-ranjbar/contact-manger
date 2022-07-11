import { useState, useEffect } from "react";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import EditContact from "./EditContact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getContacts } from "../services/getContact";
import { deleteContact } from "../services/deleteContact";
import { addContact } from "../services/addContact";
import { updateContact } from "../services/updateContact";

const ContactManager = () => {
  const [allContact, setAllContact] = useState([]);
  const [search , setSearch] = useState("");
  const [contactsFilter , setContactsFilter] = useState("");

  const AddContactHAndler = async (contact) => {
    try {
      await addContact(contact);
      const { data } = await getContacts();
      setAllContact(data);
    } catch (error) {}
  };

  const editContactHAndler = async (contact, id) => {
    try {
      await updateContact(id, contact);
      const { data } = await getContacts();
      setAllContact(data);
    } catch (error) {}
  };

  const removeContact = (id) => {
    deleteContact(id).then((res) => {
      const deleteContact = allContact.filter((c) => c.id !== id);
      setAllContact(deleteContact);
    });
  };

  const searchHandler = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm)
    if (searchTerm !== "") {
      const filterdContacts = contactsFilter.filter((c) => {
        return Object.values(c)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setAllContact(filterdContacts);
    }
    else {
      setContactsFilter(contactsFilter)
    }
  }

  useEffect(() => {
    getContacts()
      .then((res) => {
        setAllContact(res.data);
        setContactsFilter(res.data)
      })
      .catch((err) => console.log(err));
    // const getContacts = async() => {
    //  const {data} =  await http.get("/contacts")
    //  setAllContact(data)
    // getContacts();
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ContactList
                allContact={allContact}
                removeHandler={removeContact}
                search={search}
                searchHandler={searchHandler}
              />
            }
          />
          <Route
            path="/user/:id"
            element={<ContactDetail allContact={allContact} />}
          />
          <Route
            path="/edit/:id"
            element={<EditContact editContactHAndler={editContactHAndler} />}
          />
          <Route
            path="/add-contact"
            element={<AddContact AddContactHAndler={AddContactHAndler} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default ContactManager;
