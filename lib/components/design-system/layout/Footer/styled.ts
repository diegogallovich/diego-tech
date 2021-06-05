import Link from 'next/link';
import styled from '@emotion/styled';

export const FooterElement = styled.footer`
  width: 100%;
  min-height: 30rem;

  background-color: var(--black);

  position: absolute;
  bottom: 0;

  //* MEDIA QUERIES
  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
    min-height: 54rem;
  }
`;

export const FooterText = styled.h4(`
  font: var(--h1);
  padding-top: 6rem;
  color: var(--white);

  @media (max-width: 500px) {
    padding: 6rem 3rem;
  }
`);

export const GreenSpan = styled.span`
  color: var(--solutions);
`;
