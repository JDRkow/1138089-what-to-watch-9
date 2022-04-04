import { Film } from '../../types/film';
import { MoviePageTabNames } from '../../types/movie-page-tab-names';
import MoviePageOverview from '../movie-page-overview/movie-page-overview';
import MovieReviewPage from '../movie-review-page/movie-review-page';
import MoviePageDetails from '../movie=page-details/movie-page-details';

type currentTabProps = {
    activeTab: string,
    film: Film,
};

function CurrentTab({activeTab, film}: currentTabProps): JSX.Element {
  // eslint-disable-next-line no-console
  console.log(film);
  switch (activeTab) {
    case MoviePageTabNames.Details:
      return <MoviePageDetails film={film} />;
    case MoviePageTabNames.Reviews:
      return <MovieReviewPage/>;
    default:
      return <MoviePageOverview film={film}/>;
  }
}

export default CurrentTab;
