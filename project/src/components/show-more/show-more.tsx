export default function ShowMore({countFilms, setState}: ShowMoreProps): JSX.Element {
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => setState(countFilms+8)}
      >
        Show more
      </button>
    </div>
  );
}

type ShowMoreProps = {
  countFilms: number
  setState: (countFilms: number) => void;
}
