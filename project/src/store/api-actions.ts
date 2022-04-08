import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '.';
import { AuthorizationStatus } from '../const';
import { errorHandle } from '../services/errors-handler';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { Film } from '../types/film';
import { UserData } from '../types/user-data';
import { redirectToRoute, requireAuthorization, setFilms } from './action';

export const setFilmsAsync = createAsyncThunk('fetchFilms', async () => {
  try {
    const { data } = await api.get<Film[]>('/films');
    store.dispatch(setFilms(data));
  } catch (err) {
    errorHandle(err);
  }
});

export const loginAction = createAsyncThunk(
  'login',
  async ({email, password}: AuthData) => {
    try {
      const {data: {token}} = await api.post<UserData>('/login', {email, password});
      saveToken(token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(redirectToRoute('/'));
    } catch(error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete('/logout');
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'checkAuth',
  async () => {
    try {
      await api.get('/login');
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch(err) {
      errorHandle(err);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);
