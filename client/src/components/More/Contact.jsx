import React, { useState } from 'react';

function Contact({ theme }) {
  const [info, setInfo] = useState({});

  const handleChange = (e) => {
    const { value, className } = e.target;
    const clone = info;
    clone[className] = value;
    setInfo(clone);
  };

  const handleClick = () => {
    console.log(info);
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
    </div>
  );
}

export default Contact;
