import { useEffect } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { store } from '../../store';
import { fetchCurrentFilmAction, fetchReviewsAction, fetchSimillarFilmsAction } from '../../store/api-actions';
import { Film } from '../../types/film';
import Header from '../header/header';
import SmallFilmList from '../main/small-film-list/small-film-list';
import AddToListButton from '../movie-buttons/add-to-list-button/add-to-list-button';
import PlayButton from '../movie-buttons/play-button/play-button';
import CurrentTab from '../tabs/current-tab';
import Tabs from '../tabs/tabs';

export default function MoviePage(): JSX.Element{
  const params = useParams();
  const paramsId = Number(params.id);
  const { currentFilm } = useAppSelector((state) => state);

  useEffect(() => {
    store.dispatch(fetchCurrentFilmAction(paramsId));
    store.dispatch(fetchSimillarFilmsAction(paramsId));
    store.dispatch(fetchReviewsAction(paramsId));
  }, [paramsId]);

  const fourSimilarFilms = useAppSelector((state) => state.simillarFilms);

  const activeTab = useLocation().hash;

  const authorizationStatus = useAppSelector((state)=> state.authorizationStatus);

  if(!currentFilm === undefined){
    return <Navigate to={'/404'} />;
  }

  const {id,name, backgroundImage, posterImage, genre, released, isFavorite} = currentFilm as Film;

  return(
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />


          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <PlayButton filmId={id} />
                <AddToListButton filmId={id} currentStatus={isFavorite} />
                {authorizationStatus === AuthorizationStatus.Auth ?
                  <Link to={`/films/${id}/review`} className="btn film-card__button">Add review</Link>
                  : null}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <Tabs />
              <CurrentTab activeTab={activeTab} film={currentFilm as Film} />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <SmallFilmList films={fourSimilarFilms} />
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
