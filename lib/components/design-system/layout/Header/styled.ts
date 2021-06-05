import Link from 'next/link';
import styled from '@emotion/styled';
// @ts-expect-error
import Logo from './assets/logo.svg';

export const Header = styled.header`
  height: 8rem;
  width: 100%;

  transition: all 0.3s ease-in-out;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 3;

  background-color: var(--white);
`;

export const Navigation = styled.nav`
  width: 100%;
  height: 100%;
  max-width: var(--lgDesktopContentWidth);
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-around;

  transition: all 0.3s ease-in-out;
`;

export const NavigationLogotypeContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavigationLogo = styled(Logo)`
  height: 4.5rem;
`;
