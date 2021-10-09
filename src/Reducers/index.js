import { combineReducers } from 'redux';
import userReducer from './user';
import measureReducer from './measure';
import { trainingReducer, singleTrainingReducer } from './training';

export default combineReducers({
  userReducer, measureReducer, trainingReducer, singleTrainingReducer,
});
