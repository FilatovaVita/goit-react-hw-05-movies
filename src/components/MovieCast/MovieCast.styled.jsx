import styled from 'styled-components';
export const CastGallery = styled.div`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 10px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
`
export const CastPoster = styled.img`
  width: 300px;
  height: 360px;
  border-radius: 15px;
  object-fit: cover;`
