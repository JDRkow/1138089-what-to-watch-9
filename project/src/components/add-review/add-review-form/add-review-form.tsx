/* eslint-disable indent */
import { useState } from 'react';

export default function AddReviewForm(): JSX.Element {
  const [reviewText, setReviewText] = useState('');

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
          <ReviewStars />
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


function ReviewStars(): JSX.Element {
  const ratingStarsCount = [];

  for (let value = 1; value <= 10; value++) {
    ratingStarsCount.push(value);
  }

  const [rating, setRating] = useState(6);

  return (
    <div className="rating__stars">
      {ratingStarsCount.reverse().map((value) =>
        (<>
          <input onChange={() => setRating(value)} className="rating__input" id={`star-${value}`} type="radio" name="rating" value={value} checked={value === rating} />
          <label className="rating__label" htmlFor={`star-${value}`}>Rating {value}</label>
         </>),
      )}
    </div>
  );
}
