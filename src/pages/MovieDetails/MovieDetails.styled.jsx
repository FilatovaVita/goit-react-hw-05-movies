import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  display: flex;
  padding: 10px;
  margin-top: 15px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  justify-content: center;
`;

export const FilmInfoContainer = styled.div`
  margin-right: 15px;
  margin-left: 15px;
  max-width: 100%;
  max-height: 50%;
`;
export const FilmMore = styled.section`
  padding: 10px;
  margin: 15px auto;
`;
export const Paragraph = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 15px;
  font-size: 16px;
  color: orange;
`;

export const MoviePoster = styled.img`
  width: 100%;
  height: auto;
  border-radius: 15px;
`;
export const GenresList = styled.ul`
  display: flex;
  font-size: 16px;
  color: orange;
  list-style: none;
`;

export const MainTittle = styled.p`
  font-weight: 700;
  font-size: 22px;
`;

export const DetailsTittles = styled.p`
  font-weight: 500;
`;
export const GenresItem = styled.li`
  font-weight: 600;
  margin-right: 7px;
`;

export const LinkReturn = styled(NavLink)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  padding: 12px 41px;
  color: orange;
  font-weight: 500;
  width: 100px;
  background-color: #3d3d3d;
  border-radius: 40px;
  transition: all 250ms ease-in-out;

  :hover {
    transform: scale(1.05);
    box-shadow: inset 1px 1px 2px white, inset -1px -1px 2px orange;
  }
`;

export const LinkCast = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 12px 20px;
  color: orange;
  font-weight: 500;
  width: 100px;
  background-color: #3d3d3d;
  border-radius: 40px;
  transition: all 250ms ease-in-out;

  :hover {
    transform: scale(1.05);
    box-shadow: inset 1px 1px 2px white, inset -1px -1px 2px orange;
  }

  &.active {
    color: white;
    background-color: orange;
  }
`;
export const LinkRewiews = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 12px 20px;
  color: orange;
  font-weight: 500;
  width: 100px;
  background-color: #3D3D3D;;
  border-radius: 40px;
  transition: all 250ms ease-in-out;

  &.active {
    color: white;
    background-color: orange;
  }

  :hover {
    transform: scale(1.05);
    box-shadow: inset 1px 1px 2px white,
      inset -1px -1px 2px orange;
`;
export const Cover = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  border-radius: 15px;
  object-fit: cover;
`;
