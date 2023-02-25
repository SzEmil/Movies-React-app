export const SearchMovieForm = ({ onSubmit }) => {
  const handleFormOnSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const formInput = form.elements.text.value;
    onSubmit(formInput);
    form.reset();
  };
  return (
    <form onSubmit={handleFormOnSubmit}>
      <button type="submit">Search</button>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        name="text"
      />
    </form>
  );
};
