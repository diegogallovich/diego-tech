import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin: 0 auto;

  padding: 15rem 0;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 6rem 0;
  }
`;
