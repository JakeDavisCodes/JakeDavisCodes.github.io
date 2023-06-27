import React, { useState } from 'react';
import { scrollTo } from '../reusable.js';

import Selector from './Selector.jsx';

const paragraphs = [
  `Hey there! I'm Jake Davis, originally from Aurora, Colorado.
   Growing up, I discovered my passion for coding during grade school.
   Now, you probably already know I'm a bit of a nerd,
   but let me share more about myself!`,

  `I have a wide range of interests that keep me engaged.
   One of my favorite hobbies is collecting Lego Star Wars memorabilia
   and other cool Star Wars items. In addition, I take pride in my
   small collection of mechanical watches, which I'd be delighted
   to share more about!`,

  `Beyond my collecting hobbies, I'm also an enthusiastic rock climber.
   Climbing has always been a profound passion of mine,
   but a few years ago, I took it a step further and joined a rock gym.
   Since then, I've honed my skills in top rope climbing,
   and I'm loving every minute of it!`,

  `When I'm not conquering cliffs, you'll find me fully immersed
  in the world of airsoft. I'm an avid player at a local field
  and enjoy collecting and tinkering with airsoft gear.
  The problem-solving and tactical thinking required in both rock climbing
  and airsoft translate seamlessly to my coding endeavors!`,
];

function About({ theme }) {
  const [para, setPara] = useState(0);

  const handleClick = (p) => {
    setPara(p);
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
      <Selector select={handleClick} options={4} current={para} />
      <div className={`tiny_text section_text ${theme}`}>About</div>
    </div>
  );
}

export default About;
