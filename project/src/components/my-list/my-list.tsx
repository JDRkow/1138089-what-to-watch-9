import { useEffect } from 'react';
import { useAppSelector } from '../../hooks';
import { store } from '../../store';
import { setFavoriteListAction } from '../../store/api-actions';
import Header from '../header/header';
import SmallFilmCard from '../main/small-film-card/small-fim-card';

export default function MyList(): JSX.Element{
  useEffect(() => {
    store.dispatch(setFavoriteListAction());
  }, []);

  const favoriteFilms = useAppSelector((state) => state.favoriteFilms);

  return(
    <div className="user-page">

      <Header />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">

          {favoriteFilms.map((film) => (

            <article key={film.id} className="small-film-card catalog__films-card">
              <SmallFilmCard film={film}/>
            </article>
          ))}

        </div>
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
  );
}
