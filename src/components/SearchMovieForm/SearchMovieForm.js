import clsx from 'clsx';
import css from './SearchMovieForm.module.css';

export const SearchMovieForm = ({ onSubmit }) => {
  const handleFormOnSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const formInput = form.elements.text.value;
    onSubmit(formInput);
    form.reset();
  };
  return (
    <form className={css.searchForm} onSubmit={handleFormOnSubmit}>
      <input
        className={css.searchInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search videos"
        name="text"
      />
      <button className={clsx(css.searchButton)} type="submit">
        Search
      </button>
    </form>
  );
};
