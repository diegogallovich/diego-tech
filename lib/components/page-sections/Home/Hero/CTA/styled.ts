import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 4rem;

  max-width: 45rem;

  @media (max-width: 900px) {
    padding: 1.5rem;
    height: 100vh;
  }
`;

export const Heading = styled.h1`
  font: var(--h1);
  color: var(--black);
`;

export const Paragraph = styled.p`
  font: var(--paragraphLight);
`;

export const CTAButton = styled.a`
  transition: all 0.3s ease-in-out;
  padding: 1.5rem 3.9rem;
  background-color: var(--black);

  border-radius: 9px;

  color: var(--white);

  text-decoration: none;

  cursor: pointer;

  :active {
    transform: translateY(0.9rem);
  }
`;
