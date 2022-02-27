import { useParams } from 'react-router-dom';
import { Film } from '../../types/film';
import { PlayerProps } from '../../types/player-props';

export default function Player({playerProps}: {playerProps: PlayerProps}): JSX.Element{
  const params = useParams();

  const paramsId = Number(params.id);

  let film: Film;

  paramsId
    ? film = playerProps.films.filter((currentFilm) => currentFilm.id === +paramsId)[0]
    : film = playerProps.films[0];

  const {previewImage, runTime} = film;

  return(
    <div className="player">
      <video src="#" className="player__video" poster={previewImage}></video>

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" >Toggler</div>
          </div>
          <div className="player__time-value">{runTime}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}
