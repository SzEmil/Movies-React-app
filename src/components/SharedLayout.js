import { NavLink, Outlet } from 'react-router-dom';
import clsx from 'clsx';
import css from './SharedLayout.module.css';
import styled from 'styled-components';
import { Suspense } from 'react';
const StyledLink = styled(NavLink)`
  color: white;

  &.active {
    color: red;
  }
`;

export const SharedLayout = () => {
  return (
    <div>
      <header className={clsx(css.headerContainer)}>
        <nav className={clsx(css.nav)}>
          <StyledLink to="/" className={clsx(css.logo)}>
            <img
              className={clsx(css.logoImg)}
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/331877923_577736621071333_4370968066276411511_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_ohc=TEEJHX6JnEkAX_0jmPi&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTnL-iM0NZ0FCvGkGvAhFlJY3aqBfjV3yL2En-zdRSoZg&oe=64B8255C"
              alt="logo pic"
            />
          </StyledLink>
          <StyledLink to="/" className={clsx(css.navLink)}>
            HOME
          </StyledLink>
          <StyledLink to="/movies" className={clsx(css.navLink)}>
            MOVIES
          </StyledLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
