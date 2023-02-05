import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { FcFilmReel } from 'react-icons/fc';
import { Container, Header, Logo, Link, Logoname } from './SharedLayout.styled';

export const SharedLayout = () => {
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
          <Link to="/search">Search Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
