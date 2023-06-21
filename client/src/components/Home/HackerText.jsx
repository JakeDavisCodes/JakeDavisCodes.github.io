import React, { useState, useEffect } from 'react';

const random = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'l', 'k', 'j', 'h', 'g', 'f', 'd', 's', 'a', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '*', '&', '$', '$', '#', '@', '!', '?', ' '];

const encode = (word, previous = 'a') => {
  let encoded = '';
  for (let i = 0; i < word.length; i++) {
    if (Math.random() * 100 < 50) {
      encoded += random[Math.floor(Math.random() * random.length)];
    } else {
      encoded += previous[i];
    }
  }
  return encoded;
};
const partialDecode = (encoded, decoded) => {
  let result = '';
  for (let i = 0; i < decoded.length; i++) {
    if (decoded[i] === encoded[i]) result += decoded[i];
    else if (Math.random() * 100 < 50) {
      result += random[Math.floor(Math.random() * random.length)];
    } else result += encoded[i];
  }
  let index = 0;
  while (encoded[index] === decoded[index]) index += 1;
  result = result.slice(0, index) + (decoded[index] || '') + result.slice(index);
  return result;
};
const sleep = (ms) => new Promise((resolve) => { setTimeout(resolve, ms); });

function HackerText({ textArray, theme }) {
  const [display, setDisplay] = useState('');
  const [index, setIndex] = useState(0);
  const [textAction, setTextAction] = useState('write');

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (textAction === 'decode' && display === textArray[index]) {
      sleep(3000)
        .then(() => setTextAction('delete'));
    } else if (textAction === 'decode') {
      const timeout = setTimeout(() => {
        setDisplay(partialDecode(display, textArray[index]));
      }, 80);

      return () => clearTimeout(timeout);
    } else if (textAction === 'write' && display.length === textArray[index].length) {
      setTextAction('decode');
    } else if (textAction === 'write') {
      const timeout = setTimeout(() => {
        setDisplay(encode(textArray[index], display).slice(0, display.length + 1));
      }, 80);

      return () => clearTimeout(timeout);
    } else if (textAction === 'delete' && display.length === 0) {
      sleep(300)
        .then(() => {
          if (index + 1 === textArray.length) setIndex(0);
          else setIndex(index + 1);
          setTextAction('write');
        });
    } else {
      const timeout = setTimeout(() => {
        setDisplay(textArray[index].slice(0, display.length - 1));
      }, 60);

      return () => clearTimeout(timeout);
    }
  }, [display, textAction]);

  return (
    <div className="inherit">
      <p>
        {'And I\'m a'}
      </p>
      <p className={`hacker-text ${theme}`}>
        {display}
      </p>
    </div>
  );
}

export default HackerText;
