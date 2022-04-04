import { Link } from 'react-router-dom';
import { MoviePageTabNames } from '../../types/movie-page-tab-names';

export default function Tabs() {
  const currentTab = window.location.hash;
  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li className={`film-nav__item ${currentTab === MoviePageTabNames.Overview ? 'film-nav__item--active' : ''}`}>
          <Link to={MoviePageTabNames.Overview} className="film-nav__link">Overview</Link>
        </li>
        <li className={`film-nav__item ${currentTab === MoviePageTabNames.Details ? 'film-nav__item--active' : ''}`}>
          <Link to={MoviePageTabNames.Details} className="film-nav__link">Details</Link>
        </li>
        <li className={`film-nav__item ${currentTab === MoviePageTabNames.Reviews ? 'film-nav__item--active' : ''}`}>
          <Link to={MoviePageTabNames.Reviews} className="film-nav__link">Reviews</Link>
        </li>
      </ul>
    </nav>
  );
}
