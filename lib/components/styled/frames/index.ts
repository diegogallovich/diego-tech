import styled from '@emotion/styled';

export const ContentFrame = styled.div`
  height: 100%;
  width: 100%;
  max-width: var(--lgDesktopContentWidth);

  margin: 0 auto;

  transition: all 0.3s ease-in-out;

  //* MEDIA QUERIES
  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
    max-width: var(--desktopContentWidth);
    margin: 0 auto;
  }
  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
    max-width: var(--tabletContentWidth);
    margin: 0 auto;
  }
  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    max-width: var(--mobileContentWidth);
    margin: 0 auto;
  }
  // x-small devices (portrait phones and small landscape phones)
  @media (max-width: 575.98px) {
    max-width: var(--mobileContentWidth);
    margin: 0 auto;
  }
`;

export const FullWidthFrame = styled.div`
  height: 100%;
  width: 100vw;
`;
