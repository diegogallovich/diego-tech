import styled from '@emotion/styled';

export const CardContainer = styled.div`
  padding: 3.9rem;
  border-radius: 0.9rem;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background-color: ${({ theme }) => {
    if (theme === 'black') {
      return 'var(--black)';
    }

    if (theme === 'white') {
      return 'var(--white)';
    }

    if (theme === 'problems') {
      return 'var(--white)';
    }

    if (theme === 'solutions') {
      return 'var(--solutions)';
    }
  }};

  @media (max-width: 500px) {
    width: 100%;
    border-radius: 0;
    padding: 3rem 1.2rem;
  }
`;

export const CardHeading = styled.h3`
  font: var(--h3);

  color: ${({ theme }) => {
    if (theme === 'black') {
      return 'var(--white)';
    }

    if (theme === 'white') {
      return 'var(--black)';
    }

    if (theme === 'problems') {
      return 'var(--problems)';
    }

    if (theme === 'solutions') {
      return 'var(--white)';
    }
  }};
`;

export const CardText = styled.p`
  font: var(--paragraphLight);

  color: ${({ theme }) => {
    if (theme === 'black') {
      return 'var(--white)';
    }

    if (theme === 'white') {
      return 'var(--black)';
    }

    if (theme === 'problems') {
      return 'var(--problems)';
    }

    if (theme === 'solutions') {
      return 'var(--white)';
    }
  }};
`;
