import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { store } from '../../store';
import { setReviewsAction } from '../../store/api-actions';

export default function MovieReviewPage(): JSX.Element{
  const params = useParams();
  store.dispatch(setReviewsAction(Number(params.id)));
  const reviews = useAppSelector((state) => state.reviews);
  return(
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review) => (
          <div className="review" key={review.id}>
            <blockquote className="review__quote">
              <p className="review__text">{review.comment}</p>
              <footer className="review__details">
                <cite className="review__author">{review.user}</cite>
                <time className="review__date" dateTime="2016-12-24">{review.date}</time>
              </footer>
            </blockquote>
            <div className="review__rating">{review.rating.toString}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
