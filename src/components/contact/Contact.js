import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()
  const YOUR_SERVICE_ID = 'service_k3c4cwf'
  const YOUR_TEMPLATE_ID = 'template_8pef7di'
  const YOUR_PUBLIC_KEY = '0waxjStUKz5KIF1tL';
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm({YOUR_SERVICE_ID}, {YOUR_TEMPLATE_ID}, form.current, {YOUR_PUBLIC_KEY})
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact-sidebar">
          <article className="sidebar-email contact-option">
            <MdOutlineEmail className="contact-icon" />
            <h4>Email</h4>
            <h5>shishirchhetri45@gmail.com</h5>
            <a href="mailto:shishirchhetri45@gmail.com" rel="noreferrer">
              Send a message
            </a>
          </article>

          <article className="sidebar-messenger contact-option">
            <RiMessengerLine className="contact-icon" />
            <h4>Messenger</h4>
            <h5>Shishir Chhetri</h5>
            <a
              href="https://m.me/shishir_chhetrii/"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="sidebar-insta contact-option">
            <BsInstagram className="contact-icon" />
            <h4>Instagram</h4>
            <h5>Shishir Chhetri</h5>
            <a
              href="https://www.instagram.com/shishir_chhetrii/"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="7"
          ></textarea>
          <button className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
