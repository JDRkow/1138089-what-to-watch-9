import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { store } from '../../../store';
import { fetchReviewAction } from '../../../store/api-actions';
import ReviewStars from './review-stars/review-stars';

export default function AddReviewForm({ filmId }: {filmId: number}): JSX.Element {
  const navigate = useNavigate();
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(6);
  const [isDisable, setIsDisable] = useState(false);

  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setIsDisable(true);
    store.dispatch(fetchReviewAction({
      filmId: filmId,
      comment: reviewText,
      rating: rating,
    }));
    navigate(`/films/${filmId}#reviews`);

  };
  const fullReview = reviewText.length > 50 && rating > 0;
  return (
    <form onSubmit={onSubmit} action="#" className="add-review__form">
      <div className="rating">
        <ReviewStars setState={setRating} rating={rating} isDisable={isDisable}/>
      </div>

      <div className="add-review__text">
        <textarea maxLength={400} minLength={50} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={(e) => setReviewText(e.target.value)} value={reviewText} disabled={isDisable}></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={isDisable || !fullReview}>Post</button>
        </div>

      </div>
    </form>
  );
}
