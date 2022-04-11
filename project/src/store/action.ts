import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { Film } from '../types/film';
import { Review } from '../types/review';

export const setCurrentGenre = createAction('set current genre', (genre) => ({
  payload: genre,
}));

export const setFilms = createAction<Film[]>('set current films');

export const setCurrentFilm = createAction<Film>('set current film');
export const setSimillarFilms = createAction<Film[]>('set simillar films');
export const setReviews = createAction<Review[]>('set reviews');
export const sendReview = createAction<boolean>('send reviews');

export const setError = createAction<string>('set error');

export const incrementFilmsCount = createAction('set films count');
export const resetFilmsCount = createAction('reset films count');

export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');
export const redirectToRoute = createAction<string>('redirectToRoute');
