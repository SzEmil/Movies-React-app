import { NavLink, Outlet } from 'react-router-dom';
import clsx from 'clsx';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <div>
      <header className={clsx(css.headerContainer)}>
        <nav className={clsx(css.nav)}>
          <NavLink to="/" className={clsx(css.logo)}>
            <img
              className={clsx(css.logoImg)}
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/331877923_577736621071333_4370968066276411511_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_ohc=Jgiozd7hq38AX-oIhR2&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTrVORXxu5jxBgxSbId8NoNckfLD3Mvid60DTzdv6xJMw&oe=6422129C"
              alt="logo pic"
            />
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
