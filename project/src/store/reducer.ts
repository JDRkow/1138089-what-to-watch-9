import { createReducer } from '@reduxjs/toolkit';
import { Film } from '../types/film';
import { incrementFilmsCount, resetFilmsCount, setCurrentGenre, setError, setFilms } from './action';

type State = {
  activeGenre: string,
  films: Film[],
  countFilmShow: number,
  error: string,
  isDataLoaded: boolean,
};

const initialState: State = {
  activeGenre: 'All genres',
  films: [],
  countFilmShow: 8,
  error: '',
  isDataLoaded: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setCurrentGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(incrementFilmsCount, (state) => {
      state.countFilmShow += 8;
    })
    .addCase(resetFilmsCount, (state) => {
      state.countFilmShow = 8;
    })
    .addCase(setFilms, (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = true;
    });
});
