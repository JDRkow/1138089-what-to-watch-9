import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Film } from '../../../types/film';
import VideoPreview from '../video-preview/video-preview';

export default function SmallFilmCard({film}: {film: Film}): JSX.Element{
  const { id, previewImage, name, previewVideoUrl} = film;
  const [isActive, setIsActive] = useState(false);

  let playbleTimeout: number | null;

  const handleMouseOver = () => {
    playbleTimeout = window.setTimeout(() => setIsActive(true), 1000);
  };

  const handleMouseLeft = () => {
    if(playbleTimeout) {clearTimeout(playbleTimeout);}
    setIsActive(false);
  };


  return(
    <>
      <div
        className="small-film-card__image"
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseLeft}
      >
        <VideoPreview src={previewVideoUrl} poster={previewImage} isActive={isActive} />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </>
  );
}
