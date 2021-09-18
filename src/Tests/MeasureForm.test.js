import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import MeasureForm from '../Components/MeasureForm';
import { Provider } from 'react-redux';
import store from '../Reducers/store';
import { BrowserRouter } from 'react-router-dom';

describe('Test Measure App Component', () => {
  it('Expect to render App component', () => {
    const result = renderer.create(
        <Provider store={store}>
            <BrowserRouter>
            <MeasureForm />
            </BrowserRouter>
        </Provider>
    ).toJSON;
    expect(result).toMatchSnapshot();
  });
});
