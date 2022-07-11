import { useEffect, useState } from "react";
import { useNavigate , useParams } from "react-router";
import { getOneContacts } from "../services/getOneContact";

const EditContact = ({ editContactHAndler}) => {
  const [contact, setContact] = useState({ name: "", email: "" });
  const navigate = useNavigate();
  let params = useParams();

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    if (!contact.name || !contact.email) {
      alert("all fileds are mandatory");
      return;
    }
    
    e.preventDefault();
    editContactHAndler(contact, params.id);
    setContact({ name: "", email: "" });
    navigate("/");
  };

  useEffect( ()=> {
      getOneContacts(params.id)
      .then( res=> {
          setContact({name:res.data.name , email:res.data.email})
      }) 
  }, [])


  return (
    <div className="add-contact">
      <h3>Edit Contact</h3>
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
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

export default EditContact;
