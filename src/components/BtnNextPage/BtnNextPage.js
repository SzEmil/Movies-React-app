import clsx from 'clsx';
import css from './BtnNextPage.module.css';

export const BtnNextPage = ({ handleOnClick }) => {
  return (
    <>
      <button type="button" className={clsx(css.btn)} onClick={handleOnClick}>
        Next Page
      </button>
    </>
  );
};
