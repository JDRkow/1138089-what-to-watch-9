import { createAction } from '@reduxjs/toolkit';

export const setCurrentGenre = createAction('set current genre', (genre) => ({
  payload: genre,
}));
