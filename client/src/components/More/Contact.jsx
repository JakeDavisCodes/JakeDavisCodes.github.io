/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';

function Info({ onClick, className, text }) {
  return (
    <div className={`${className} contact_info`}>
      <i className={`${className}_icon fa-solid fa-${className}`} />
      <p
        className="fancy"
        onClick={() => { navigator.clipboard.writeText(text); onClick(); }}
      >
        {text}
      </p>
    </div>
  );
}

function Notif({ setNotif, show, message }) {
  useEffect(() => {
    setTimeout(() => {
      setNotif({ show: false, message });
    }, 2000);
  }, [show]);

  return (
    <div
      className="notification"
      style={{
        transform: `translateY(${show ? 500 : 1000}%)`,
      }}
    >
      {message}
    </div>
  );
}

function Contact({ position, theme }) {
  const [notif, setNotif] = useState({ show: false, message: 'Copied to Clipboard' });

  const onClick = () => {
    setNotif({ show: true, message: 'Copied to Clipboard' });
  };

  return (
    <div
      className={`${theme} contact`}
      style={{
        transform: `translate3d(${position === 1 ? '0' : '150'}%, 0, 0)`,
      }}
    >
      <p>{'I\'d love to hear from you!'}</p>
      <p className="p2">You can reach out to me with my contact information below.</p>
      <Info onClick={onClick} className="envelope" text="JakeDavisEmail@gmail.com" />
      <Info onClick={onClick} className="mobile" text="(303) 419-5300" />
      <Notif setNotif={setNotif} show={notif.show} message={notif.message} />
    </div>
  );
}

export default Contact;
