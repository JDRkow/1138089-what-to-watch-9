import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { store } from '../../store';
import { fetchReviewsAction } from '../../store/api-actions';
import { format } from 'date-fns';

export default function MovieReviewPage(): JSX.Element{
  const params = useParams();
  useEffect(() => {
    store.dispatch(fetchReviewsAction(Number(params.id)));
  }, [params.id]);

  const reviews = useAppSelector((state) => state.reviews);
  return(
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review) => (
          <div className="review" key={review.id}>
            <blockquote className="review__quote">
              <p className="review__text">{review.comment}</p>
              <footer className="review__details">
                <cite className="review__author">{review.user.name}</cite>
                <time className="review__date" dateTime="2016-12-24">{format(new Date(review.date), 'MMMM d, yyyy')}</time>
              </footer>
            </blockquote>
            <div className="review__rating">{review.rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
