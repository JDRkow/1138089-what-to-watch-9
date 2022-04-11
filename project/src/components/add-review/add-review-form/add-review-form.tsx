import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { store } from '../../../store';
import { sendReviewAction } from '../../../store/api-actions';
import ReviewStars from './review-stars/review-stars';

export default function AddReviewForm({ filmId }: {filmId: number}): JSX.Element {
  const navigate = useNavigate();
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(6);

  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if ( reviewText !== '' || reviewText.length > 50 || reviewText.length < 300) {
      store.dispatch(sendReviewAction({
        filmId: filmId,
        comment: reviewText,
        rating: rating,
      }));
      navigate(`/film/${filmId}`);
    }
  };

  return (
    <form onSubmit={onSubmit} action="#" className="add-review__form">
      <div className="rating">
        <ReviewStars setState={setRating} rating={rating}/>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={(e) => setReviewText(e.target.value)} value={reviewText}></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
}
