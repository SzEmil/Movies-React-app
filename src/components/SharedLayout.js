import { NavLink, Outlet } from 'react-router-dom';
import clsx from 'clsx';
import css from './SharedLayout.module.css';
export const SharedLayout = () => {
  return (
    <div>
      <header className={clsx(css.headerContainer)}>
        <nav className={clsx(css.nav)}>
          <NavLink to="/" className={clsx(css.logo)}>
            <span style={{ color: 'red' }}>FILM</span>OTEKA
          </NavLink>
          <NavLink to="/" className={clsx(css.navLink)}>
            HOME
          </NavLink>
          <NavLink to="/movies" className={clsx(css.navLink)}>
            MOVIES
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
