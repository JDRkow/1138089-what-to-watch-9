import { Navigate } from 'react-router-dom';
import { Film } from '../../types/film';
import { MoviePageTabNames } from '../../types/movie-page-tab-names';
import MoviePageDetails from '../movie-page-details/movie-page-details';
import MoviePageOverview from '../movie-page-overview/movie-page-overview';
import MovieReviewPage from '../movie-review-page/movie-review-page';

type currentTabProps = {
    activeTab: string,
    film: Film,
};

function CurrentTab({activeTab, film}: currentTabProps): JSX.Element {
  switch (activeTab) {
    case MoviePageTabNames.Details:
      return <MoviePageDetails film={film} />;
    case MoviePageTabNames.Reviews:
      return <MovieReviewPage />;
    case MoviePageTabNames.Overview:
      return <MoviePageOverview film={film}/>;
    default:
      return <Navigate to='/404' />;
  }
}

export default CurrentTab;
