import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '.';
import { errorHandle } from '../services/errors-handler';
import { Film } from '../types/film';
import { setFilms } from './action';

export const setFilmsAsync = createAsyncThunk('fetchFilms', async () => {
  try {
    const { data } = await api.get<Film[]>('/films');
    store.dispatch(setFilms(data));
  } catch (err) {
    errorHandle(err);
  }
});

