import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTrainings } from '../Actions/training';

const TrainingList = () => {
  const trainingsURL = 'http://localhost:3000/all/trainings';
  const dispatch = useDispatch();

  const fetchTrainings = async () => {
    const response = await fetch(trainingsURL, {
      headers: {
        Authorization: `bearer ${localStorage.getItem('token')}`,
      },
    });
    const data = await response.json();
    dispatch(getTrainings(data.data));
  };

  const trainings = useSelector((state) => state);

  useEffect(() => {
    fetchTrainings(); // eslint-disable-next-line
    }, []);

  const trainingDisplay = () => trainings.trainingReducer;

  return (
    <div className="measure-list">
      {trainingDisplay().map((training) => (
        <div className="measure-show" key={training.id}>
          <a href={`/training/${training.id}`}>{training.name}</a>
        </div>
      ))}
    </div>
  );
};

export default TrainingList;
