
import { Film } from '../../types/film';

export default function MoviePageOverview({film}: {film: Film}): JSX.Element{

  const {rating, levelRating, scoresCount, directors, starrings} = film;

  return(
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{levelRating}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>

        <p className="film-card__director"><strong>Dirrector: {directors.map((dirrector) => dirrector.name)}</strong></p>

        <p className="film-card__starring"><strong>Starring: {starrings.map((starring) => `${starring.name  }, `)} and other</strong></p>
      </div>
    </>
  );
}
