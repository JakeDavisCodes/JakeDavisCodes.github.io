import React, { useState } from 'react';

import axios from 'axios';

function Contact({ theme }) {
  const [info, setInfo] = useState({});
  const [submitted, submit] = useState(false);

  const handleChange = (e) => {
    const { value, className } = e.target;
    const clone = info;
    clone[className] = value;
    setInfo(clone);
  };

  const handleClick = () => {
    if (info.contactName === undefined || info.contactName.length < 3) {
      document.getElementsByClassName('contactName')[0].focus();
      alert('Please fill in your name!');
      return;
    }
    if (!info.email || !info.email.includes('@') || !info.email.includes('.')) {
      document.getElementsByClassName('email')[0].focus();
      alert('Please enter a valid email!');
      return;
    }

    let [e1, e2, e3] = '';
    [e1] = info.email.split('@');
    e3 = info.email.split('').reverse().join('').split('.')[0].split('').reverse().join('');
    e2 = info.email.split('').reverse().join('').split('.')[1].split('@')[0].split('').reverse().join('');
    if (!e1 || !e2 || e3.length < 2) {
      document.getElementsByClassName('email')[0].focus();
      alert('Please enter a valid email!');
    } else if (!info.subject || info.subject.length < 4) {
      document.getElementsByClassName('subject')[0].focus();
      alert('Please enter a subject!');
    } else if (!info.msg || info.msg.length < 10) {
      document.getElementsByClassName('msg')[0].focus();
      alert('Please enter a message!');
    } else {
      console.log(info);
      axios.post('/email', {
        email: info.email,
        subject: info.subject,
        text: info.msg,
        name: info.contactName,
        phone: info.phone,
      })
        .then(() => submit(true))
        .catch((err) => alert(err));
    }
  };

  return (
    <div className={`${theme} contact`}>
      <div>
        <input onChange={(e) => handleChange(e)} className="contactName" placeholder="Your Name" />
        <input onChange={(e) => handleChange(e)} className="phone" placeholder="Phone Number" />
        <input onChange={(e) => handleChange(e)} className="email" placeholder="Email" />
      </div>
      <input onChange={(e) => handleChange(e)} className="subject" placeholder="Subject" />
      <textarea onChange={(e) => handleChange(e)} className="msg" placeholder="Your message here!" />
      <button onClick={() => handleClick()}>Send</button>
      <span className={submitted ? 'show' : null}>
        <p>Thanks for the Email,</p>
        <p>{'I\'ll be geting back to you!'}</p>
      </span>
    </div>
  );
}

export default Contact;
