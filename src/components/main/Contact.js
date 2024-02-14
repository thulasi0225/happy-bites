import { useState } from "react";
import axios from "axios";

import Navbar from "../utilities/Navbar";
import FeatureCard from "../utilities/FeatureCard";
import Footer from "../utilities/Footer";

import "../css/Contact.css";
import "../css/Home.css";
import "../css/mobile/mobile.css";
import contact from "../../img/cook.png";
//
const Contact = () => {
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = contactDetails;

  const handleChange = (e) => {
    setContactDetails({ ...contactDetails, [e.target.name]: e.target.value });
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    axios
      .post("https://happy-bites.onrender.com/users/add-message", {
        name: name,
        email: email,
        message: message,
      })
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));

    setContactDetails({ name: "", email: "", message: "" });

    e.preventDefault();
  };
  return (
    <>
      <div>
        <header className="showcase-main">
          <Navbar />
          <div className="content">
            <h1 className="content-heading">
              Please fill out the form below to
              <span id="content-text"> contact us</span>
            </h1>
          </div>
        </header>
        <section className="contact-section">
          <img src={contact} alt="..."></img>
          <div id="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label for="mesaage">Message</label>
                <textarea
                  name="message"
                  id="mesaage"
                  placeholder="Feedback?"
                  value={message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-link">
                Submit &nbsp;
                <i className="fa-solid fa-circle-chevron-right"></i>
              </button>
            </form>
          </div>
        </section>
        <section className="list">
          <FeatureCard
            title="Location"
            description="50, Main St, Guindy, Chennai"
            icon="fa-solid fa-location-dot"
            contact={true}
          />
          <FeatureCard
            title="Phone Number"
            description="+91 987611241"
            icon="fa-solid fa-phone"
            contact={true}
          />
          <FeatureCard
            title="Email Address"
            description="santhosh8857@gmail.com"
            icon="fa-solid fa-paper-plane"
            contact={true}
          />
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
