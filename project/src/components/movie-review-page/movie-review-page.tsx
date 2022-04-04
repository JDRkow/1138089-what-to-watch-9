import { ReviewProps } from '../../types/review-props';

export default function MovieReviewPage(): JSX.Element{
  const reviewsProps: ReviewProps[] = [
    {
      id: 1,
      author: 'Kate Muir',
      date: 'December 24, 2016',
      rating: '8,9',
      text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed films in years.',
    },
    {
      id: 2,
      author: 'Matthew Lickona',
      date: 'December 20, 2002',
      rating: '7,2',
      text: 'The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.',
    },
    {
      id: 3,
      author: 'Paula Fleri-Soler',
      date: 'December 20, 2011',
      rating: '7,2',
      text: 'It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.',
    },
    {
      id: 4,
      author: 'Bill Goodykoontz',
      date: 'November 18, 2015',
      rating: '8,0',
      text: 'Anderson\'s films are too precious for some, but for those of us willing to lose ourselves in them, they\'re a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.',
    },
    {
      id: 5,
      author: 'Eloisa Koch',
      date: 'October 24, 2016',
      rating: '8,9',
      text: 'Once in a while, you see a film where it\'s clear that everyone involved is operating at the peak of of their skills, yet the whole is so misguided that the result is still awful. Such is "The Desperate Hour." ',
    },
    {
      id: 6,
      author: 'Rosina Wilde',
      date: 'May 20, 2012',
      rating: '7,2',
      text: 'Naomi Watts is Amy Carr, a mom who goes out for a morning jog in the forest just as a school shooting happens in her rural town, and must struggle to find her way out of the forest, overcoming injuries while juggling multiple incoming phone calls and texts in hopes of figuring out whether her elementary-school age daughter Emily (Sierra Maltby).',
    },
  ];
  return(
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviewsProps.map((elem) => (
          <div className="review" key={elem.id}>
            <blockquote className="review__quote">
              <p className="review__text">{elem.text}</p>
              <footer className="review__details">
                <cite className="review__author">{elem.author}</cite>
                <time className="review__date" dateTime="2016-12-24">{elem.date}</time>
              </footer>
            </blockquote>
            <div className="review__rating">{elem.rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
