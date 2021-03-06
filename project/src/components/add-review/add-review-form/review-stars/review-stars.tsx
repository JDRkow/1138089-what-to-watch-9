export default function ReviewStars({setState, isDisable, rating}: ReviewStarsProps): JSX.Element {
  const ratingStarsCount = [];

  for (let value = 1; value <= 10; value++) {
    ratingStarsCount.push(value);
  }

  return (
    <div className="rating__stars">
      {ratingStarsCount.reverse().map((value, index) =>
        (
          <>
            <input disabled={isDisable} onChange={() => setState(value)} className="rating__input" id={`star-${value}`} type="radio" name="rating" value={value} checked={value === rating} />
            <label className="rating__label" htmlFor={`star-${value}`}>Rating {value}</label>
          </>
        ),
      )}
    </div>
  );
}

type ReviewStarsProps = {
  rating: number;
  isDisable: boolean;
  setState: (rating: number) => void;
}

