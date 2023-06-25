import React from 'react';
import { scrollTo } from '../reusable.js';

function About({ theme }) {
  return (
    <div className="page_section big_text" id="about">
      <img
        src="images/me.jpeg"
        alt="A dazzling photograph of me should be here..."
      />
      <p>
        {`My name is Jake Davis, I grew up in Aurora Colorado and during grade school,
           I found my passion for code. But I'm sure you already know I'm a nerd,
           so let me tell you more about me!`}
      </p>
      <p>
        {`I'm interested in a great many things. I'm a collector of Lego Star Wars
          and other Star Wars items. Along with my lego collection, I have a small
          collection of mechanical watches that I'm very proud of and would love
          to tell you more about!`}
      </p>
      <p>
        {`Beyond just my collecting, I also love rock climbing! Climbing in general
          had always been a great passion of mine, but a few years ago I signed up
          for a a rock gym membership and started to get very good at top rope in my gym!
          Along with rock climbing, I'm also an avid airsoft player at a local field!
          Airsoft gear is something I love to collect and play with. I enjoy the
          problem solving and tactics that come with both rock climbing and airsoft,
          and I believe that much of it translates to problem solving in code!`}
      </p>
      <div className={`tiny_text section_text ${theme}`}>About</div>
    </div>
  );
}

export default About;
