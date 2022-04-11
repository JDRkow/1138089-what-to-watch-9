import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../../const';
import { useAppSelector } from '../../../hooks';
import { store } from '../../../store';
import { fetchCurrentFilmAction, fetachFavoriteFilmListAction } from '../../../store/api-actions';

export default function AddToListButton({filmId, currentStatus}: {filmId: number, currentStatus: boolean}): JSX.Element{
  const authorizationStatus = useAppSelector((state)=> state.authorizationStatus);
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(currentStatus);

  useEffect(()=>{
    store.dispatch(fetchCurrentFilmAction(filmId));
  }, [filmId]);

  function handleOnSubmit(status: number) {
    if(authorizationStatus === AuthorizationStatus.Auth)
    {
      store.dispatch(fetachFavoriteFilmListAction({
        filmId: filmId,
        status: status,
      }));
      setIsFavorite(!isFavorite);
    }
    else{
      navigate('/login');
    }
  }

  if (!isFavorite){
    return (
      <button className="btn btn--list film-card__button" type="button" onClick={() => handleOnSubmit(1)}>
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
        <span>My list</span>
      </button>
    );
  }
  return (
    <button className="btn btn--list film-card__button" type="button" onClick={() => handleOnSubmit(0)}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#in-list"></use>
      </svg>
      <span>My list</span>
    </button>
  );
}
