import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/film';

export const setCurrentGenre = createAction('set current genre', (genre) => ({
  payload: genre,
}));

export const setFilms = createAction<Film[]>('set current film');
export const setError = createAction<string>('set error');

export const incrementFilmsCount = createAction('set films count');
export const resetFilmsCount = createAction('reset films count');
