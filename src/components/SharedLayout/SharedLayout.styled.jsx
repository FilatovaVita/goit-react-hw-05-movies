import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
    align-items: center;
  }
`;
export const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border-radius: 10px;
  text-decoration: none;
  color: black;

  &.active {
    color: white;
    background-color: orange;
  }
`;

export const Logoname = styled.span`
  font-weight: 500;
  font-size: 20px;
`;
export const Link = styled(NavLink)`
  padding: 10px 16px;
  border-radius: 10px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orange;
  }
`;


