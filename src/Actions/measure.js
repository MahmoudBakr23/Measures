const SAVE_MEASURE = 'SAVE_MEASURE';
const GET_MEASURE = 'GET_MEASURE';

const saveMeasure = (measure) => {
    return {
        type: SAVE_MEASURE,
        payload: measure
    }
}

const getMeasure = (measure) => {
    return {
        type: GET_MEASURE,
        payload: measure
    }
}

export { saveMeasure, SAVE_MEASURE, GET_MEASURE, getMeasure };
