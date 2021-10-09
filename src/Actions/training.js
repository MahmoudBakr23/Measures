const GET_TRAININGS = 'GET_TRAININGS';
const GET_TRAINING = 'GET_TRAINING';

const getTrainings = (training) => ({
  type: GET_TRAININGS,
  payload: training,
});

const getSingleTraining = (training) => ({
  type: GET_TRAINING,
  payload: training,
});

export {
  getTrainings, GET_TRAINING, GET_TRAININGS, getSingleTraining,
};
