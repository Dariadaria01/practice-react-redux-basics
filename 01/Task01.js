import React, { useState, useEffect } from 'react';
import Subject from './../src/libs/Subject';

const clickSubject = new Subject();

const Task01 = () => {
  const [time, setTime] = useState(0);
  const [tagName, setTagName] = useState('??');
  const [cursorPosition, setCursorPosition] = useState('[?,?]');

  const setEventTime = ({ timeStamp }) => {
    setTime(parseInt(timeStamp / 1000));
  };

  const setEventTagName = ({ target }) => {
    setTagName(target.tagName);
  };

  const setEventCursorPosition = ({ pageX, pageY }) => {
    setCursorPosition(`[${pageX},${pageY}]`);
  };

  useEffect(() => {
    clickSubject.subscribe(setEventTime);
    clickSubject.subscribe(setEventTagName);
    clickSubject.subscribe(setEventCursorPosition);
  }, []);

  return (
    <section>
      <h1>Task 1</h1>

      <div onClick={(event) => clickSubject.notify(event)}>
        <p>
          <strong>Kliknij wybrany element:</strong> <a>link</a>,{' '}
          <button>button</button>, <span>span</span>
        </p>

        <ul>
          <li>time: {time}s</li>
          <li>tagName: {tagName}</li>
          <li>position: {cursorPosition}</li>
        </ul>
      </div>
    </section>
  );
};

export default Task01;
