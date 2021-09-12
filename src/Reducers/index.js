import { combineReducers } from 'redux';
import userReducer from './user';
import measureReducer from './measure';

export default combineReducers({ userReducer, measureReducer });
