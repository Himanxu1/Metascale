import React from 'react'
import ContactCard from '../components/ContactCard/ContactCard';
import ContactForm from '../components/ContactForm/ContactForm';
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
