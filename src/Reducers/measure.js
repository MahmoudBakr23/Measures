import { SAVE_MEASURE, GET_MEASURE } from '../Actions/measure';

const initialMeasures = [];
const initialMeasure = {};

const measureReducer = (state = initialMeasures, action) => {
  switch (action.type) {
    case SAVE_MEASURE:
      return action.payload;
    default:
      return state;
  }
};

const singleMeasureReducer = (state = initialMeasure, action) => {
  switch (action.type) {
    case GET_MEASURE:
      return action.payload;
    default:
      return state;
  }
};

export { measureReducer, singleMeasureReducer };
