import React from "react";
import "./contact.css";
import Button from "../../utility/button/Button";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  const phone = "+919950108143";
  const email = "rahuljangir99501@gmail.com";
  const address = `27.900659, 75.077535`;

  return (
    <div className="contact">
      <h2>Get in touch</h2>
      <div className="contact-box">
        <ul className="details">
          <li>
            <a href={`tel:${phone}`}>
              <FaPhoneAlt className="icon" />
              <span>{phone}</span>
            </a>
          </li>
          <li>
            <a href={`mailto:${email}`}>
              <FaEnvelope className="icon" />
              <span>Rahuljangir@gmail.com</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FaClock className="icon" />
              <span>MON-SAT, 9-5 | SUN, 10-4</span>
            </a>
          </li>
          <li>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                address
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMapMarkerAlt className="icon" />
              <span> Dishnau Sikar Raj.</span>
            </a>
          </li>
        </ul>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Name" id="name" />
          <label htmlFor="email">Email address</label>
          <input type="text" placeholder="your@gmail.com" id="email" />
          <label htmlFor="msg">Message</label>
          <textarea name="msg" id="msg" placeholder="Your message"></textarea>
          <div className="btn">
            <Button name="SEND MESSAGE" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
