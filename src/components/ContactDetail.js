import {Link} from "react-router-dom";

const ContactDetail = (props) => {
  console.log(props.allContact[0]);
  const user = props.allContact[0];
  
    return ( 
          <div className="contact-list">
              <div>
                <p>name: {user.name}</p>
                <p>email: {user.email}</p>
                <Link to="/">Go to contact list</Link>
              </div>
          </div>
     );
}
 
export default ContactDetail;