import React from 'react';
import { FiMail } from 'react-icons/fi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import '@/app/styles/Contact.css'; 

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-grid">
        <div className="contact-info">
          {/* Get in Touch Section */}
          <h2 className="contact-heading">Get in Touch</h2>
          <p className="contact-description">
            Drop me a line, or give me a call or send me a message by submitting the form below.
          </p>
          <div className="contact-item">
            <FiMail size={20} />
            <span>anoshafatima1995@gmail.com</span>
          </div>
          <div className="contact-item">
            <BsFillTelephoneFill size={20} />
            <span>(+92) 331-111222334</span>
          </div>
        </div>
        <div className="contact-form">
          {/* Name Section */}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-input" id="name" />
          </div>
          {/* Email Section */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" className="form-input" id="email" />
          </div>
          {/* Message Section */}
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-input" id="message" rows={8}></textarea>
          </div>
          <button className="submit-button">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
