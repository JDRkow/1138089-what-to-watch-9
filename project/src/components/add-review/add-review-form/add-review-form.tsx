import { useState } from 'react';

export default function AddReviewForm(): JSX.Element {
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(6);

  const ratingStars = [];

  for (let value = 0; value <= 9; value++) {
    ratingStars.push(value);
  }

  const ratingStarsList = ratingStars.reverse().map((value) => <ReviewStars key={value} setState={setRating} value={value} rating={rating} /> );

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {ratingStarsList}
        </div>
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


type ReviewStarsProps = {
  value: number;
  rating: number;
  setState: (rating: number) => void;
}


function ReviewStars({value, rating, setState}: ReviewStarsProps): JSX.Element {
  return (
    <>
      <input onChange={() => setState(value)} className="rating__input" id={`star-${value}`} type="radio" name="rating" value={value} checked={value === rating} />
      <label className="rating__label" htmlFor={`star-${value}`}>Rating {value}</label>
    </>
  );
}
