import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  padding-bottom: 6rem;
`;

export const TopRowContainer = styled.div`
  display: flex;
  align-items: flex-start;

  div {
    max-width: 45rem;
  }

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const BottomRowContainer = styled.div`
  display: flex;
  align-items: flex-start;
  div {
    max-width: 45rem;
  }
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;
