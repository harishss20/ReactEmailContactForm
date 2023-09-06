import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../App.css";

function Contact() {
  const form = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_iua3bgp",
        "template_3d39dct",
        form.current,
        "C2uXyDgjY6IZPsSdy"
      )
      .then(
        (result) => {
          console.log("Form submitted successfully.");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="contact_div">
      <form ref={form} className="form" action="submit" onSubmit={handleSubmit}>
        <div className="labels">
          <input
            className="lab"
            type="text"
            placeholder="Name"
            id="user_name"
            name="user_name"
            required
          />

          <input
            className="lab"
            type="email"
            placeholder="Email"
            id="email"
            required
            name="user_email"
          />

          <textarea
            className="lab"
            name="message"
            id="message"
            placeholder="Message"
            cols="30"
            rows="10"
            required
          ></textarea>
          <button className="button"> Submit </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
