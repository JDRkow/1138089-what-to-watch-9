
import { Film } from '../../types/film';

export default function MoviePageOverview({film}: {film: Film}): JSX.Element{
  return(
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getfilmLevel(film.rating)}</span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>

        <p className="film-card__director"><strong>Dirrector: {film.director}</strong></p>

        <p className="film-card__starring">
          <strong>Starring: {film.starring.map((actor, index) => {
            if (index === 0) {
              return ` ${actor}`;
            }
            if (index < 3) {
              return `, ${actor} `;
            } else {
              return '';
            }
          })} and other
          </strong>
        </p>
      </div>
    </>
  );
}

function getfilmLevel(rating: number) {
  if (rating <= 3) {
    return 'Bad';
  }
  else if (rating <= 5) {
    return 'Normal';
  }
  else if (rating <= 8) {
    return 'Good';
  }
  else if (rating <= 10) {
    return 'Very good';
  }

  return 'Awesome';
}
