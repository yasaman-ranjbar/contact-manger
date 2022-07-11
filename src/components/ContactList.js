import { useState } from "react";
import { FaUserCircle, FaTrashAlt, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactList = ({ allContact, removeHandler , search , searchHandler }) => {




  return (
    <div>
      <div className="addContact">
        <Link to="/add-contact">
          <button>add contact</button>
        </Link>
      </div>
      <div className="contact-list">
        <input
          type="text"
          placeholder="search..."
          className="search"
          value={search}
          onChange={searchHandler}
        />
      </div>
      {allContact.map((c) => {
        return (
          <div key={c.id} className="contact-list">
            <div className="content-left">
              <div>
                <FaUserCircle className="userIcon" />
              </div>
              <div className="userInfo">
                <Link to={{ pathname: `user/${c.id}`, state: { allContact } }}>
                  <p>{c.name}</p>
                </Link>
                <Link to={`user/${c.id}`}>
                  <p>{c.email}</p>
                </Link>
              </div>
            </div>
            <div>
              <FaTrashAlt
                className="FaTrashAlt"
                onClick={() => removeHandler(c.id)}
              />
              <Link to={`/edit/${c.id}`}>
                <FaEdit className="FaEdit" />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactList;
