import { combineReducers } from 'redux';
import userReducer from './user';
import { measureReducer, singleMeasureReducer } from './measure';

export default combineReducers({ userReducer, measureReducer, singleMeasureReducer });
