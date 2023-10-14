import React, { useState } from "react";
import Topbar from "../../components/Topbar";
import { contactUsAction } from "../../actions/contactAction";
import { useDispatch } from "react-redux";

const Contact = () => {
  const [contact, setContact] = useState({
    name:"",
    phone:"",
    email:"",
    message:""
  })
  const dispatch = useDispatch()

  const contactSubmit = async(e) => {
    e.preventDefault()
    const data = await dispatch(contactUsAction(contact))
    setContact({
      name:"",
      phone:"",
      email:"",
      message:""
    })
    alert(data.message)
  }

  return (
    <>
      <Topbar />
      <div className="contact-content font1 max-width-1 m-auto">
        <div className="max-width-1 m-auto mx-1">
          <h2>Feel Free to Contact Us</h2>
          <div className="contact-form">
            <div className="form-box">
              <input type="text" placeholder="Enter Your Name" name="name" value={contact.name} onChange={(e)=>setContact({...contact,[e.target.name]:e.target.value})} />
            </div>
            <div className="form-box">
              <input type="number" max={10} name="phone" value={contact.phone} onChange={(e)=>setContact({...contact,[e.target.name]:e.target.value})} placeholder="Enter Your Phone Number" />
            </div>
            <div className="form-box">
              <input type="email" placeholder="Enter Your Email Id" name="email" value={contact.email} onChange={(e)=>setContact({...contact,[e.target.name]:e.target.value})}/>
            </div>
            <div className="form-box">
              <textarea
                name="message"
                cols="30"
                rows="10"
                placeholder="How may we help you?"
                value={contact.message}
                onChange={(e)=>setContact({...contact,[e.target.name]:e.target.value})}
              ></textarea>
            </div>
            <div className="form-box">
              <button className="btn btn-primary" type="submit" onClick={contactSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
