import { getMoviesReviews } from 'js/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import clsx from 'clsx';
import css from './Revievs.module.css';
export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleMoreInfoMovie = async () => {
      try {
        const movieDetail = await getMoviesReviews(movieId);
        setReviews(movieDetail);
      } catch (error) {
        setError(error);
      }
    };
    handleMoreInfoMovie();
  }, [movieId]);
  return (
    <>
      {error && <p>Oh, something went wrong :c error: {error.message}</p>}
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3 className={clsx(css.revievHeader)}>{review.author}</h3>
              <p className={clsx(css.revievContent)}>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ color: 'white' }}>No reviews</p>
      )}
    </>
  );
};
