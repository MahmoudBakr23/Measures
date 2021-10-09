import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import TrainingForm from '../Components/TrainingForm';
import store from '../Reducers/store';

describe('Test Measure App Component', () => {
  it('Expect to render App component', () => {
    const result = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <TrainingForm />
        </BrowserRouter>
      </Provider>,
    ).toJSON;
    expect(result).toMatchSnapshot();
  });
});
