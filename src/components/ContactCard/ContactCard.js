import React from "react";
import "./ContactCard.css";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { GoLocation } from "react-icons/go";
import { MdPrivacyTip } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
const style = { color: "white", fontSize: "2em", marginRight: 10 };
const style1 = { color: "white", fontSize: "1.4em", marginRight: 10 };
function ContactCard() {
  return (
    <div className="contact-card-container">
      <p>Contact</p>
      <div className="contact-card-details-container">
        <p className="contact-card-heading">Gigaweb</p>
        <p>Making Internet Awwesome</p>
        <div className="contact-social-container">
          <GrInstagram style={style} />
          <BsTwitter style={style} />
          <BsLinkedin style={style} />
        </div>
      </div>
      <div className="contact-footer-element-container">
        <div className="contact-footer-element">
          <GoLocation style={style1}/>
          <p>Remote</p>
        </div>
        <div className="contact-footer-element">
          <MdPrivacyTip style={style1}/>
          <p>Privacy Policy</p>
        </div>
        <div className="contact-footer-element">
          <AiOutlineMail style={style1}/>
          <p>contact@gigaweb.in</p>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
