import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './Components/App';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import MeasureForm from './Components/MeasureForm';
import MeasureList from './Components/MeasureList';
import Measure from './Components/Measure';
import reportWebVitals from './reportWebVitals';
import store from './Reducers/store';

ReactDOM.render(
  <>
    <Provider store={store}>
      <App />
      <BrowserRouter>
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/measure/:id" component={Measure} />
          <Route path="/create/measure" component={MeasureForm} />
          <Route path="/measures" component={MeasureList} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
