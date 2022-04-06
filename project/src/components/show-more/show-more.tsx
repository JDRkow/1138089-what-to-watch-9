import { useAppDispatch } from '../../hooks';
import { incrementFilmsCount } from '../../store/action';

export default function ShowMore(): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => dispatch(incrementFilmsCount())}
      >
        Show more
      </button>
    </div>
  );
}
