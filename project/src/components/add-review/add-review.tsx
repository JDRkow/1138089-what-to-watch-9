import { Navigate, useParams } from 'react-router-dom';
import { Film } from '../../types/film';
import Header from '../header/header';
import AddReviewForm from './add-review-form/add-review-form';

export default function AddReview({films}: {films: Film[]}): JSX.Element{
  const params = useParams();

  const paramsId = Number(params.id);

  const film = films.find((currentFilm) => currentFilm.id === paramsId);

  if (film === undefined) {
    return <Navigate to="/404"  />;
  }

  const {id, name, posterImage, previewImage} = film;

  return(
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={previewImage} alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm filmId={id} />
      </div>

    </section>
  );
}
