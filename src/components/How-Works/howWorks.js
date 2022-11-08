import React from "react";
import "./HowWorks.css";
import Fade from "react-reveal/Fade";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import { FaTelegram } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";
function HowWorks() {
  return (
    <>
      <Fade bottom>
        <div className="HowWorksSec">
          <div className="content">
            <h1 className="heading">How it Works </h1>

            <div className="icon-container">
              <div className="flex-box">
                <AiOutlineTwitter
                  className="icontwittter"
                  size="2rem"
                  style={{ cursor: "pointer" }}
                />
                <AiOutlineInstagram
                  className="iconInsta"
                  size="2rem"
                  style={{ cursor: "pointer" }}
                />
                <AiFillLinkedin
                  className="iconLinkedin"
                  size="2rem"
                  style={{ cursor: "pointer" }}
                />
                <h2>Aquire</h2>
              </div>

              <BsArrowRightShort className="arrow-icon arrow-icon1" size="2rem" />
              <div className="flex-box">
                <SiDiscord
                  size="2rem"
                  className="iconDiscord"
                  style={{ cursor: "pointer", color: "white" }}
                />
                <FaTelegram
                  size="2rem"
                  className="iconTelegram"
                  style={{ cursor: "pointer", color: "darkmagenta" }}
                />
                <h2>Build</h2>
              </div>

              <BsArrowRightShort className="arrow-icon arrow-icon2" size="2rem" />

              <div className="flex-box">
                <AiOutlineInstagram
                  className="iconInsta"
                  size="2rem"
                  style={{ cursor: "pointer" }}
                />
                <AiFillLinkedin
                  className="iconLinkedin"
                  size="2rem"
                  style={{ cursor: "pointer" }}
                />

                <h2>Scale</h2>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}

export default HowWorks;
