import { createReducer } from '@reduxjs/toolkit';
import { films } from '../mocks/films';
import { Film } from '../types/film';
import { setCurrentGenre, setFilms } from './action';

type State = {
  activeGenre: string,
  films: Film[],
};

const initialState: State = {
  activeGenre: 'All genres',
  films: films,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(setFilms, (state) => {
      state.films = films;
    });
});
