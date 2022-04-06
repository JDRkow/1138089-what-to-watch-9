import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppProps } from '../../types/app-props';
import NotFoundPage from '../not-found-page/not-found-page';
import AddReview from '../add-review/add-review';
import AuthPage from '../auth/auth-page';
import Main from '../main/main';
import MoviePage from '../movie-page/movie-page';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import PrivateRoute from '../private-route/private-route';

function App({films}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/login' element={<AuthPage/>} />
        <Route path='/mylist' element={<PrivateRoute hasAuthorize={false}><MyList/></PrivateRoute>}/>
        <Route path='/films/:id' element={<MoviePage films={films}/>} />
        <Route path='/films/:id/review' element={<AddReview films={films}/>} />
        <Route path='/player/:id' element={<Player films={films}/>} />
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
