import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Login from '../Components/Login';
import { Provider } from 'react-redux';
import store from '../Reducers/store';
import { BrowserRouter } from 'react-router-dom';

describe('Test Measure App Component', () => {
  it('Expect to render App component', () => {
    const result = renderer.create(
        <Provider store={store}>
            <BrowserRouter>
            <Login />
            </BrowserRouter>
        </Provider>
    ).toJSON;
    expect(result).toMatchSnapshot();
  });
});
