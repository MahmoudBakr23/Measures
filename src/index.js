import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './Components/App';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Training from './Components/Training';
import reportWebVitals from './reportWebVitals';
import store from './Reducers/store';
import TrainingForm from './Components/TrainingForm';
import TrainingList from './Components/TrainingList';

ReactDOM.render(
  <>
    <Provider store={store}>
      <App />
      <BrowserRouter>
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/create/training" component={TrainingForm} />
          <Route path="/all/trainings" component={TrainingList} />
          <Route path="/training/:id" component={Training} />
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
