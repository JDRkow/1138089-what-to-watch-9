import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FilmCardProps } from '../../types/filmCardProps';
import NotFoundPage from '../not-found-page/not-found-page';
import AddReview from '../add-review/add-review';
import AuthPage from '../auth/auth-page';
import Main from '../main/main';
import MoviePage from '../movie-page/movie-page';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import PrivateRoute from '../private-route/private-route';

function App({mainProps}: {mainProps: FilmCardProps}): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main filmCardProps={mainProps}/>} />
        <Route path='/login' element={<AuthPage/>} />
        <Route path='/mylist' element={<PrivateRoute hasAuthorize={false}><MyList/></PrivateRoute>}/>
        <Route path='/films/:id' element={<MoviePage/>} />
        <Route path='/films/:id/review' element={<AddReview/>} />
        <Route path='/player/:id' element={<Player/>} />
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
