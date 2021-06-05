import styled from '@emotion/styled';
import { SpaceProps } from './types';

export const VerticalSpace = styled.div<SpaceProps>`
  width: 100%;

  height: ${(props) => props.amount};
`;

export const HorizontalSpace = styled.div<SpaceProps>`
  width: ${(props) => props.amount};

  height: 100%;
`;
