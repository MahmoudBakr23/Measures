const SAVE_MEASURE = 'SAVE_MEASURE';

const saveMeasure = (measure) => {
    return {
        type: SAVE_MEASURE,
        payload: measure
    }
}

export { saveMeasure, SAVE_MEASURE };
