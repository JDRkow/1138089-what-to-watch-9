import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks';
import { store } from '../../store';
import { fetchPromoFilmAction } from '../../store/api-actions';
import GenreList from '../genre-list/genre-list';
import Header from '../header/header';
import AddToListButton from '../movie-buttons/add-to-list-button/add-to-list-button';
import PlayButton from '../movie-buttons/play-button/play-button';
import ShowMore from '../show-more/show-more';
import SmallFilmList from './small-film-list/small-film-list';
import LoadingScreen from '../loading-screen/loading-screen';

export default function Main(): JSX.Element{
  const films = useAppSelector((state) => state.films);
  const currentGenre = useAppSelector((state) => state.activeGenre);
  useEffect(()=>{
    store.dispatch(fetchPromoFilmAction());
  }, []);

  const [countFilmShow, setCountFilmShow] = useState(8);

  const promoFilm = useAppSelector((state) => state.promoFilm);

  if(!promoFilm){
    return <LoadingScreen />;
  }

  const filmsList = (currentGenre === 'All genres') ? films : films.filter(({genre}) => currentGenre === genre);
  const genres =  ([...new Set(['All genres', ...films.map((film) => film.genre)])]);

  const genresList = genres.slice(0, 10);

  return(
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.backgroundImage} alt={promoFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.posterImage} alt={promoFilm.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <PlayButton filmId={promoFilm.id} />

                <AddToListButton filmId={promoFilm.id} currentStatus={promoFilm.isFavorite} />
              </div>
            </div>
          </div>
        </div>
      </section>


      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList genres={genresList} />
          <SmallFilmList films={filmsList.slice(0, countFilmShow)} />
          {countFilmShow < filmsList.length ? <ShowMore countFilms={countFilmShow} setState={setCountFilmShow} /> : ''}
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
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
