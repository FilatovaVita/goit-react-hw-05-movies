import styled from 'styled-components';
import { Link } from 'react-router-dom';




export const Gallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 16px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const MovieListItem = styled.li`
  cursor: pointer;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: whitesmoke;
`;


export const Cover = styled.div`
  width: 100%;
  height: auto;
  border-radius: 15px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
  }
`;
export const Poster = styled.img`
  width: 100%;
  height: 500px;
  border-radius: 15px;
`;

export const TitleRating = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Rating = styled.p`
  font-size: 18px;
  padding: 4px 8px;
  border-radius: 5px;
  border: 1px solid black;
  display: inline-block;
  text-align: center;
  background-color: ${({ rating }) => {
    if (rating > 7) {
      return 'forestgreen';
    }
    if (rating >= 4 && rating <= 7) {
      return 'goldenrod';
    }
    if (rating > 0 && rating < 4) {
      return 'red';
    }
  }};

  color: ${({ rating }) => rating >= 4 && rating <= 7};
`;
