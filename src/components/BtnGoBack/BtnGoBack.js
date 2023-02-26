import clsx from 'clsx';
import css from './BtnGoBack.module.css';
import { useNavigate } from 'react-router-dom';
export const BtnGoBack = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
        className={clsx(css.btn)}
        type="bytton"
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
    </>
  );
};
