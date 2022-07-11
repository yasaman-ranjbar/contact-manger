import { useState } from "react";
import { useNavigate } from "react-router";

const AddContact = ({ AddContactHAndler }) => {
  const [contact, setContact] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    if (!contact.name || !contact.email) {
      alert("all fileds are mandatory");
      return;
    }
    
    e.preventDefault();
    AddContactHAndler(contact);
    setContact({ name: "", email: "" });
    navigate("/");
  };


  return (
    <div className="add-contact">
      <h3>Add Contact</h3>
      <form onSubmit={submitForm}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={contact.name}
          onChange={changeHandler}
        />
        <label>email</label>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={contact.email}
          onChange={changeHandler}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddContact;
