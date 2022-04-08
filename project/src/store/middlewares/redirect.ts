import { createBrowserHistory } from 'history';
import {Middleware} from 'redux';
import { reducer } from '../reducer';

type Reducer = ReturnType<typeof reducer>;

const browserHistory = createBrowserHistory();

export const redirect: Middleware<unknown, Reducer>=
  (_store) =>
    (next) =>
      (action) => {
        if (action.type === 'redirectToRoute') {
          browserHistory.push(action.payload);
        }
        return next(action);
      };
