import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { Film } from '../types/film';
import { Review } from '../types/review';
import {
  incrementFilmsCount,
  requireAuthorization,
  resetFilmsCount,
  sendReview,
  setCurrentFilm,
  setCurrentGenre,
  setError,
  setFavoriteFilms,
  setFilms,
  setReviews,
  setSimillarFilms,
  setPromoFilm
} from './action';

type State = {
  activeGenre: string,
  films: Film[],
  promoFilm: Film | null,
  currentFilm: Film | object,
  simillarFilms: Film[],
  favoriteFilms: Film[],
  reviews: Review[],
  sendingReview: boolean,
  countFilmShow: number,
  error: string,
  isDataLoaded: boolean,
  authorizationStatus: AuthorizationStatus,
};

const initialState: State = {
  activeGenre: 'All genres',
  films: [],
  promoFilm: null,
  currentFilm: {},
  simillarFilms: [],
  favoriteFilms: [],
  reviews: [],
  sendingReview: false,
  countFilmShow: 8,
  error: '',
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setCurrentGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(setFavoriteFilms, (state, action) => {
      state.favoriteFilms = action.payload;
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
    })
    .addCase(setPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(setCurrentFilm, (state, action) => {
      state.currentFilm = action.payload;
    })
    .addCase(setSimillarFilms, (state, action) => {
      state.simillarFilms  = action.payload;
    })
    .addCase(setReviews, (state, action) => {
      state.reviews  = action.payload;
    })
    .addCase(sendReview, (state, action) => {
      state.sendingReview  = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});
