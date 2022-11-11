import React from "react";
import "./ContactFormStyles.css";
const style={color:"white",opacity:"1"}
function ContactForm() {
  return (
    <div className="contact-form-container">
       <p><span className="contact-details-bold">Lets talk</span> <span className="contact-details-non-bold">We are looking forward to work wit you and get back to you asap</span></p>
          <div className="contact-details">
          <div className="contact-name-email">
            <input type="text" value="" placeholder="Name" name="name" className="form-input" required></input>
            <input type="mail" value="" name="email" placeholder="Email" className="form-input" required></input>
          </div>
          <textarea className="input-textbox" rows="17" col="20" placeholder="Message" required>

          </textarea>
          </div>
          <p><span className="contact-details-non-bold">By submitting you agree our </span><span className="contact-details-bold">Terms and Conditions</span></p>
          <button type="submit" className="send__message"><span style={style} >Send Message</span></button> 
    </div>
  );
}

export default ContactForm;
