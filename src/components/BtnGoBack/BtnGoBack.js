import clsx from 'clsx';
import css from './BtnGoBack.module.css';

export const BtnGoBack = () => {
  return (
    <>
      <button className={clsx(css.btn)} type="bytton">
        Go back
      </button>
    </>
  );
};
