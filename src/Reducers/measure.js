import { SAVE_MEASURE } from '../Actions/measure';

const initialMeasures = [];

const measureReducer = (state = initialMeasures, action) => {
  switch (action.type) {
    case SAVE_MEASURE:
      return action.payload;
    default:
      return state;
  }
};

export default measureReducer;
