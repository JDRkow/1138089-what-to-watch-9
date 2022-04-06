import { createReducer } from '@reduxjs/toolkit';
import { films } from '../mocks/films';
import { Film } from '../types/film';
import { incrementFilmsCount, resetFilmsCount, setCurrentGenre } from './action';

type State = {
  activeGenre: string,
  films: Film[],
  countFilmShow: number,
};

const initialState: State = {
  activeGenre: 'All genres',
  films: films,
  countFilmShow: 8,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(incrementFilmsCount, (state) => {
      state.countFilmShow += 8;
    })
    .addCase(resetFilmsCount, (state) => {
      state.countFilmShow = 8;
    });
});
