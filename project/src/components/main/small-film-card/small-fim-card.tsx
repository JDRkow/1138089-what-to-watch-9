import { Link } from 'react-router-dom';
import { Film } from '../../../types/film';

export default function SmallFilmCard({film}: {film: Film}): JSX.Element{
  const { id, previewImage, name} = film;
  return(
    <>
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </>
  );
}
