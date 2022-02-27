import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { films } from './mocks/films';
import { AppProps } from './types/app-props';

const appProps: AppProps = {
  films: films,
};

ReactDOM.render(
  <React.StrictMode>
    <App appProps={appProps}/>
  </React.StrictMode>,
  document.getElementById('root'));
