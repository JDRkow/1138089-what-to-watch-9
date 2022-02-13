import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { FilmCardProps } from './types/filmCardProps';

const mainProps: FilmCardProps = {
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  releaseYear: '2014',
};

ReactDOM.render(
  <React.StrictMode>
    <App mainProps={mainProps}/>
  </React.StrictMode>,
  document.getElementById('root'));
