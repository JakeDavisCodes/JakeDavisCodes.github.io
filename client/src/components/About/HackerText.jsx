import React, { useState, useEffect } from 'react';

const random = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'l', 'k', 'j', 'h', 'g', 'f', 'd', 's', 'a', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '*', '&', '$', '$', '#', '@', '!', '?', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ' '];

const encode = (word) => {
  let encoded = '';
  while (encoded.length !== word.length) {
    encoded += random[Math.floor(Math.random() * random.length)];
  }
  return encoded;
};
const partialDecode = (encoded, decoded) => {
  let result = '';
  for (let i = 0; i < decoded.length; i++) {
    if (decoded[i] === encoded[i]) result += decoded[i];
    else result += random[Math.floor(Math.random() * random.length)];
  }
  let index = 0;
  while (encoded[index] === decoded[index]) index += 1;
  result = result.slice(0, index) + (decoded[index] || '') + result.slice(index);
  return result;
};
const sleep = (ms) => new Promise((resolve) => { setTimeout(resolve, ms); });

function HackerText({ textArray }) {
  const [display, setDisplay] = useState('');
  const [index, setIndex] = useState(4);
  const [textAction, setTextAction] = useState('write');

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (textAction === 'decode' && display === textArray[index]) {
      sleep(4000)
        .then(() => setTextAction('delete'));
    } else if (textAction === 'decode') {
      const timeout = setTimeout(() => {
        const that = partialDecode(display, textArray[index]);
        setDisplay(that);
      }, 100);

      return () => clearTimeout(timeout);
    } else if (textAction === 'write' && display.length === textArray[index].length) {
      setTextAction('decode');
    } else if (textAction === 'write') {
      const timeout = setTimeout(() => {
        setDisplay(encode(textArray[index]).slice(0, display.length + 1));
      }, 100);

      return () => clearTimeout(timeout);
    } else if (textAction === 'delete' && display.length === 0) {
      sleep(500)
        .then(() => {
          if (index + 1 === textArray.length) setIndex(0);
          else setIndex(index + 1);
          setTextAction('write');
        });
    } else {
      const timeout = setTimeout(() => {
        setDisplay(textArray[index].slice(0, display.length - 1));
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [display, textAction]);

  return (
    <p className="hacker-text">
      {display}
    </p>
  );
}

export default HackerText;
