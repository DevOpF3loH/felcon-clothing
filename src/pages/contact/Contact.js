import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ChatIcon from "@mui/icons-material/Chat";

import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="title">
          <h1>GET IN TOUCH</h1>
        </div>
        <div className="contact-info">
          <div className="text-box">
            <PhoneIcon />
            <p>0746998401</p>
          </div>
          <div className="text-box">
            <ChatIcon />
            <p>devopnthw@gmail.com</p>
          </div>
          <div className="text-box">
            <LocationOnIcon />
            <p>11-00518 Kayole</p>
            <p>Embakasi</p>
            <p>Nairobi 00518</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
