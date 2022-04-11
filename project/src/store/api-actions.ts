import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '.';
import { AuthorizationStatus } from '../const';
import { errorHandle } from '../services/errors-handler';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { FavoriteFilm } from '../types/favorite-film';
import { Film } from '../types/film';
import { Review } from '../types/review';
import { SendReview } from '../types/send-review';
import { UserData } from '../types/user-data';
import { redirectToRoute, requireAuthorization, sendReview, setCurrentFilm, setFavoriteFilms, setFilms, setPromoFilm, setReviews, setSimillarFilms } from './action';

export const setFilmsAsync = createAsyncThunk('fetchFilms', async () => {
  try {
    const { data } = await api.get<Film[]>('/films');
    store.dispatch(setFilms(data));
  } catch (err) {
    errorHandle(err);
  }
});


export const fetchCurrentFilmAction = createAsyncThunk(
  'fetchCurrentFilm',
  async (id: number) => {

    try {
      const { data } = await api.get<Film>((`/films/${id}`));
      store.dispatch(setCurrentFilm(data));
    } catch (error) {
      errorHandle(error);
      store.dispatch(redirectToRoute('/404'));
    }
  },
);

export const fetchPromoFilmAction = createAsyncThunk(
  'fetchPromoFilm',
  async () => {

    try {
      const { data } = await api.get<Film>('/promo');
      store.dispatch(setPromoFilm(data));
    } catch (error) {
      errorHandle(error);
      store.dispatch(redirectToRoute('/404'));
    }
  },
);

export const setFavoriteListAction = createAsyncThunk(
  'fetachFavoriteList',
  async () => {
    try {
      const { data } = await api.get<Film[]>('/favorite');
      store.dispatch(setFavoriteFilms(data));
    } catch(error) {
      errorHandle(error);
    }
  },
);

export const fetachFavoriteFilmListAction = createAsyncThunk(
  'fetachFavoriteFilmList',
  async ({filmId, status}: FavoriteFilm) => {
    try {
      await api.post(`/favorite/${filmId}/${status}`);
    } catch(error) {
      errorHandle(error);
    }
  },
);

export const fetchReviewsAction = createAsyncThunk(
  'fetchReviews',
  async (filmId: number) => {

    try {
      const {data} = await api.get<Review[]>((`/comments/${filmId}`));
      store.dispatch(setReviews(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchReviewAction = createAsyncThunk(
  'fetchReview',
  async ({filmId, rating, comment}: SendReview) => {
    try {
      await api.post<Review>(`/comments/${filmId}`, {rating, comment});
      store.dispatch(sendReview(false));
      store.dispatch(redirectToRoute(`films/${filmId}`));
    } catch (error) {
      errorHandle(error);
      store.dispatch(sendReview(false));
    }
  },
);

export const fetchSimillarFilmsAction = createAsyncThunk(
  'fetchSimillarFilms',
  async (id: number) => {

    try {
      const {data} = await api.get<Film[]>((`/films/${id}/similar`));
      store.dispatch(setSimillarFilms(data));
    } catch (error) {
      errorHandle(error);
      store.dispatch(redirectToRoute('/404'));
    }
  },
);

export const loginAction = createAsyncThunk(
  'login',
  async ({email, password}: AuthData) => {
    try {
      const {data: {token}} = await api.post<UserData>('/login', {email, password});
      saveToken(token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      return true;
    } catch(error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  'logout',
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
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);
