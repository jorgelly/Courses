import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './view/App';
import store from './store';

// import React from 'react'

const Index = () => {
  return (
    <div>HELLLOOOOOOO</div>
  )
}

render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('app')
);
