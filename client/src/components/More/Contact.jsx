import React, { useState } from 'react';

function Contact({ theme }) {
  return (
    <div className={`${theme} contact`}>
      <div>
        <input className="contactName" placeholder="Your Name" />
        <input className="phone" placeholder="Phone Number" />
        <input className="email" placeholder="Email" />
      </div>
      <input className="subject" placeholder="Subject" />
      <textarea className="msg" placeholder="Your message here!" />
      <button>Submit</button>
    </div>
  );
}

export default Contact;
