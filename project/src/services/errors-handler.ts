import request from 'axios';
import { store } from '../store';
import { setError } from '../store/action';

type ErrorType = unknown;

export const errorHandle = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const {response} = error;

  if (response) {
    switch (response.status) {
      case 400:
        store.dispatch(setError(response.data.error));
        break;
      case 401:
        store.dispatch(setError(response.data.error));
        break;
      case 404:
        store.dispatch(setError(response.data.error));
        break;
    }
  }
};
