import { NavLink, Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/movies">MOVIES</NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
