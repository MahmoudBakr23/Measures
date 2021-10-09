import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const TrainingForm = () => {
  const [name, setName] = useState('');
  const trainingURL = 'https://mysterious-anchorage-87965.herokuapp.com/create/training';
  const history = useHistory();

  const createTraining = async () => {
    const training = {
      name,
    };
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(training),
    };
    const response = await fetch(trainingURL, config);
    const data = await response.json();
    history.push('/all/trainings');
  };

  const onSubmit = (e) => {
    createTraining();
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" onChange={(e) => setName(e.target.value)} placeholder="What's your training!" />
        <button type="submit" className="submit-btn">SUBMIT</button>
      </form>
    </div>
  );
};

export default TrainingForm;
