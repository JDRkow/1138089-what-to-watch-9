// import { useState } from 'react';
import { Film } from '../../../types/film';
import SmallFilmCard from '../small-film-card/small-fim-card';

export default function SmallFilmList({films}: {films: Film[]}): JSX.Element{


  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <article className="small-film-card catalog__films-card" key={film.id}>
          <SmallFilmCard film={film}/>
        </article>
      ))}
    </div>
  );
}
