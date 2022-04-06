import { createAction } from '@reduxjs/toolkit';

export const setCurrentGenre = createAction('set current genre', (genre) => ({
  payload: genre,
}));

export const setFilms = createAction('set current film');

export const incrementFilmsCount = createAction('set films count');
export const resetFilmsCount = createAction('reset films count');
