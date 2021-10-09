import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleTraining } from '../Actions/training';
import { saveMeasure } from '../Actions/measure';
import MeasureForm from './MeasureForm';

const Training = () => {
  const { id } = useParams();
  localStorage.setItem('id', id);
  const measureURL = `https://mysterious-anchorage-87965.herokuapp.com/trainings/${id}`;
  const dispatch = useDispatch();

  const fetchTraining = async () => {
    const response = await fetch(measureURL, {
      headers: {
        Authorization: `bearer ${localStorage.getItem('token')}`,
      },
    });
    const data = await response.json();
    dispatch(getSingleTraining(data.data));
    dispatch(saveMeasure(data.measures));
  };

  const training = useSelector((state) => state);

  useEffect(() => {
    fetchTraining(); // eslint-disable-next-line
    }, []);

  const displayTraining = () => training.singleTrainingReducer;
  const displayMeasures = () => {
    if (training.measureReducer) {
      return training.measureReducer;
    }
    return [];
  };

  return (
    <div className="single-measure">
      <div className="measure-name">
        <h3>{displayTraining().name}</h3>
      </div>
      <div className="measure-display">
        {displayMeasures().map((measure) => (
          <div key={measure.id}>
            <h2>{measure.count}</h2>
            <h2 className="measure-timing">{measure.time}</h2>
          </div>
        ))}
      </div>
      <div>
        <MeasureForm />
      </div>
    </div>
  );
};

export default Training;
