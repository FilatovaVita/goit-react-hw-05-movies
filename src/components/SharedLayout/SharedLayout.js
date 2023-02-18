import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { FcFilmReel } from 'react-icons/fc';

import { Container, Header, Logo, Link, Logoname } from './SharedLayout.styled';
import { Loader } from '../Loader/Loader';
import { ThemeSwitch } from '../../utils/ThemeSwitch';

export function SharedLayout() {
  return (
    <Container>
      <Header>
        <Logo to="/" end>
          <FcFilmReel style={{ width: 30, height: 30 }} />
          <Logoname> VieHub</Logoname>
        </Logo>

        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Search Movies</Link>
          <ThemeSwitch />
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
