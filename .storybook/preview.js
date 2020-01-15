import { addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import 'antd-mobile/dist/antd-mobile.css';
import { createBrowserHistory } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';

const middlewares = [];
const mockStore = configureStore(middlewares);
const history = createBrowserHistory();

// Listen for changes to the current location.
history.listen((location, actionName) => {
  // location is an object like window.location
  // actions({ onClick: action, location });
  action(actionName)(location);
});

addDecorator(storyFn => (
  <Provider store={mockStore()}>
    <Router history={history}>{storyFn()}</Router>
  </Provider>
));
