import styled from '@emotion/styled';

export const Container = styled.div`
  min-height: 100vh;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export const MainContent = styled.main`
  height: 100%;
  width: 100%;

  margin: 0 auto;

  padding-top: 8rem;
  padding-bottom: 30rem;

  transition: all 0.3s ease-in-out;

  text-align: left;

  //* MEDIA QUERIES
  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
    padding-bottom: 70rem;
  }
`;
