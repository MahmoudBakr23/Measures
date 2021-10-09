import { GET_TRAINING, GET_TRAININGS } from '../Actions/training';

const initialTrainings = [];
const initialTraining = {};

const trainingReducer = (state = initialTrainings, action) => {
  switch (action.type) {
    case GET_TRAININGS:
      return action.payload;
    default:
      return state;
  }
};

const singleTrainingReducer = (state = initialTraining, action) => {
  switch (action.type) {
    case GET_TRAINING:
      return action.payload;
    default:
      return state;
  }
};

export { trainingReducer, singleTrainingReducer };
