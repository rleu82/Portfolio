import React from 'react';
import styled from 'styled-components';

const ContactFormStyles = styled.section`
  margin: 0 2rem;
  .contactHeader {
    margin-bottom: 2rem;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    input {
      font-size: 1em;
      width: 95%;
      min-width: 200px;
      border: 1px solid #d9d9d9;
      border-radius: 5px;
      padding: 1rem;
      margin-bottom: 1rem;
    }
    textarea {
      font-size: 0.8em;
      width: 95%;
      min-width: 200px;
      min-height: 150px;
      resize: vertical;
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 1rem;
    }
    label {
      margin: 0 0 0.5em 0;
    }
    button {
      width: 50%;
      max-width: 400px;
    }
    /* hide labels */
    span {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }
  }
`;

export default function ContactForm() {
  return (
    <ContactFormStyles>
      <div className="contactHeader">
        <h3>Send Me A Message</h3>
      </div>
      <form
        name="contact-form"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input className="hidden" name="bot-field" />
        <label htmlFor="name">
          <span>Name</span>
          <input name="name" id="name" placeholder="Name" type="text" />
        </label>
        <label htmlFor="email">
          <span>Email</span>
          <input
            name="email"
            id="email"
            placeholder="Email@name.com"
            type="email"
          />
        </label>
        <label htmlFor="message">
          <span>Message</span>
          <textarea name="message" id="message" placeholder="Your Message" />
        </label>
        <button type="submit">Send</button>
      </form>
    </ContactFormStyles>
  );
}
