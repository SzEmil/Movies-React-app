import clsx from 'clsx';
import css from './BtnPreviousPage.module.css';

export const BtnPreviousPage = ({ handleOnClick }) => {
  return (
    <>
      <button type="button" className={clsx(css.btn)} onClick={handleOnClick}>
        PreviousPage
      </button>
    </>
  );
};
