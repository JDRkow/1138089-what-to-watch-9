import { useState } from 'react';
import { SmallFilmCardProps } from '../../../types/small-film-card-props';
import SmallFilmCard from '../small-film-card/small-fim-card';

export default function SmallFilmList({films}: {films: SmallFilmCardProps}): JSX.Element{
  const [selectedCard, setSelectedCard] = useState<number>();
  const handelMouseOnCard = (id: number) => {
    setSelectedCard(id);
  };

  return (
    <div className="catalog__films-list">
      {films.films.map((film) => (
        <article className="small-film-card catalog__films-card" key={film.id} onMouseEnter={() => {handelMouseOnCard(film.id);}}>
          <SmallFilmCard film={film}/>
        </article>
      ))}
      {selectedCard}
    </div>
  );
}
