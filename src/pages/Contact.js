import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formStatus, setFormStatus] = useState("Send");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");

    // Clear form input fields
    setName("");
    setEmail("");
    setMessage("");

    setFormStatus("Send");

    // Show alert message
    window.alert("Thanks for submitting the form!");
  };

  return (
    <div className="container">
      <h2 className="mb-3">Write Your Message...</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            className="form-control"
            type="text"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-control"
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          className="btn btn-danger"
          type="submit"
          disabled={formStatus === "Submitting..."}
        >
          {formStatus}
        </button>
      </form>
    </div>
  );
}

export default Contact;
