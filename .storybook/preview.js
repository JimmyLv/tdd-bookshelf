import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import React from 'react';
import { addDecorator } from '@storybook/react';

import 'antd-mobile/dist/antd-mobile.css';

const middlewares = [];
const mockStore = configureStore(middlewares);
const history = createMemoryHistory();

addDecorator(storyFn => (
  <Provider store={mockStore()}>
    <Router history={history}>{storyFn()}</Router>
  </Provider>
));
