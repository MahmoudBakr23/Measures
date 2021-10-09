import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useCountUp } from 'react-countup';

const MeasureForm = () => {
  const [time, setTime] = useState(0);
  const [count, setCount] = useState(0); // eslint-disable-next-line
  const training_id = localStorage.getItem('id');
  const measureURL = 'http://localhost:3000/create/measure';
  const history = useHistory();

  const createMeasure = async () => {
    const measure = {
      time,
      count, // eslint-disable-next-line
      training_id,
    };
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(measure),
    };
    const response = await fetch(measureURL, config);
    const data = await response.json();
    console.log(data);
    history.push('/measures');
  };

  const onSubmit = (e) => {
    createMeasure();
    e.preventDefault();
  };

  const {
    start, pauseResume,
  } = useCountUp({
    ref: 'timing',
    start: time,
    duration: 60,
    end: 60,
    startOnMount: false,
    onPauseResume: () => {
      document.getElementById('timer').value = document.getElementById('timing').textContent;
      setTime(document.getElementById('timer').value);
    },
  });

  return (
    <div>
      <div className="timing-container">
        <div className="timing-btns">
          <button type="button" className="time-green" onClick={start}>Start</button>
          <button type="button" className="time-red" onClick={pauseResume}>Stop</button>
        </div>
        <div className="time-circle">
          <p id="timing" />
          <span>s</span>
        </div>
      </div>
      <form onSubmit={onSubmit}>
        <input id="timer" type="number" name="time" onChange={(e) => setTime(e.target.value)} hidden />
        <input type="number" name="count" onChange={(e) => setCount(e.target.value)} placeholder="How many counts?" />
        <button type="submit" className="submit-btn">SUBMIT</button>
      </form>
    </div>
  );
};

export default MeasureForm;
