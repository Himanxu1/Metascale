import React from 'react'
import ContactCard from '../ContactCard/ContactCard';
import ContactForm from '../ContactForm/ContactForm';
import "./Contact.css"
function Contact() {
    return (
        <div>
          <div className="contact-box-container">
            <div>
            <ContactForm/>
            </div>
            <div>
            <ContactCard/>
            </div>
          </div>
        </div>
      );
}

export default Contact
