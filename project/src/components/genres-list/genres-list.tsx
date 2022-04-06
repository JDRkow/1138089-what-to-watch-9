import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCurrentGenre } from '../../store/action';

type Props = {
  genres: string[];
}

export default function GenreList({genres}: Props): JSX.Element {
  const currentGenre = useAppSelector((state) => state.activeGenre);
  const dispatch = useAppDispatch();
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li
          key = {genre}
          className = {`catalog__genres-item ${genre === currentGenre ? 'catalog__genres-item--active' : ''}`}
          onClick = {() => {
            dispatch(setCurrentGenre(genre));
          }}
        >
          <Link to={''} className="catalog__genres-link">{genre}</Link>
        </li>
      ))}
    </ul>
  );
}
