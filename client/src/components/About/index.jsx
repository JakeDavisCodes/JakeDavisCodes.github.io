import React, { useState } from 'react';
import { scrollTo } from '../reusable.js';

const paragraphs = [
  `My name is Jake Davis, I grew up in Aurora, Colorado and during grade school,
   I found my passion for code. But I'm sure you already know I'm a nerd,
   so let me tell you more about me!`,

  `I'm interested in a great many things. I'm a collector of Lego Star Wars
   and other Star Wars items. Along with my lego collection, I have a small
   collection of mechanical watches that I'm very proud of and would love
   to tell you more about!`,

  `Beyond just my collecting, I also love rock climbing! Climbing in general
   had always been a great passion of mine, but a few years ago I signed up
   for a a rock gym membership and started to get very good at top rope in my gym!`,

  `Along with rock climbing, I'm also an avid airsoft player at a local field!
   Airsoft gear is something I love to collect and play with. I enjoy the
   problem solving and tactics that come with both rock climbing and airsoft,
   and I believe that much of it translates to problem solving in code!`,
];

function About({ theme }) {
  const [para, setPara] = useState(0);

  const handleClick = () => {
    setPara(para + 1 === 4 ? 0 : para + 1);
  };

  return (
    <div className="page_section big_text" id="about">
      <img
        src="images/me.jpeg"
        alt="A dazzling photograph of me should be here..."
      />
      <div className="text">
        {paragraphs.map((p, idx) => (
          <p
            style={{
              zIndex: `${idx === para ? 100 : -100}`,
              opacity: `${idx === para ? 1 : 0}`,
              transform: `${idx === para ? 'translateY(0%)' : 'translateY(30%)'}`,
              transition: ['transform 0.7s ease', 'opacity 1s ease'],
            }}
          >
            {p}
          </p>
        ))}
      </div>
      <div className="dots">
        {paragraphs.map((p, idx) => (
          <i className={`dot fa-${idx === para ? 'solid' : 'regular'} fa-circle-dot`} />
        ))}
      </div>
      <i onClick={handleClick} className="chev fa-solid fa-chevron-down" />
      <div className={`tiny_text section_text ${theme}`}>About</div>
    </div>
  );
}

export default About;
