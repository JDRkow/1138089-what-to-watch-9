import { useState } from 'react';
import ReviewStars from './review-stars/review-stars';

export default function AddReviewForm(): JSX.Element {
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(6);

  return (
    <form action="#" className="add-review__form">
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
