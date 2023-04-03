import React, { useState, useEffect } from 'react';

function HackerText({ textArray }) {
  const [display, setDisplay] = useState('');
  const [index, setIndex] = useState(0);

  const deleteAction = () => {
    console.log('del');
    if (!display.length) {
      setTimeout(() => {
        if (index < textArray.length) setIndex(index + 1);
        else setIndex(0);
        writeAction();
      }, 4000);
    }

    const timeoutID = setTimeout(() => {
      setDisplay(textArray[index].slice(0, display.length - 1));
    }, 100);

    // eslint-disable-next-line consistent-return
    return () => clearTimeout(timeoutID);
  };
  const writeAction = () => {
    console.log('write', display);
    if (display === textArray[index]) setTimeout(deleteAction(), 4000);

    const timeoutID = setTimeout(() => {
      setDisplay(textArray[index].slice(0, display.length + 1));
    }, 100 + (Math.random() * 100));

    // eslint-disable-next-line consistent-return
    return () => clearTimeout(timeoutID);
  };

  useEffect(() => writeAction(), []);

  return (
    <p className="hacker-text">
      {display}
    </p>
  );
}

export default HackerText;
