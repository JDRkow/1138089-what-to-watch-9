import request from 'axios';
import { toast } from 'react-toastify';

type ErrorType = unknown;

export const errorHandle = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const {response} = error;

  if (response) {
    switch (response.status) {
      case 400:
        toast.warn(response.data.error);
        break;
      case 401:
        toast.warn(response.data.error);
        break;
      case 404:
        toast.warn(response.data.error);
        break;
    }
  }
};
