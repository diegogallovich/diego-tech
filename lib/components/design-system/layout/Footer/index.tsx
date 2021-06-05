import {
  FooterElement,
  FooterText,
  GreenSpan,
} from './styled';
import { ContentFrame } from '../../../styled';

export const Footer = () => {
  return (
    <FooterElement>
      <ContentFrame>
        <FooterText>
          <GreenSpan>Thanks</GreenSpan> for
          reading all the way.
          <br />
          I’d say you know me pretty well by
          now. 🤙
        </FooterText>
      </ContentFrame>
    </FooterElement>
  );
};
