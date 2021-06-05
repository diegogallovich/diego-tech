import {
  Container,
  Heading,
  Paragraph,
  CTAButton,
} from './styled';
import { VerticalSpace } from '../../../../styled';

export const CTA = () => {
  return (
    <Container>
      <Heading>Who am I?</Heading>
      <VerticalSpace amount='1.8rem' />
      <Paragraph>
        Solution oriented technology
        enthusiast and software developer who
        believes in digital business, digital
        economy and digital security.
      </Paragraph>
      <VerticalSpace amount='3rem' />
      <CTAButton href='mailto:dieguiviti@gmail.com'>
        Contact me
      </CTAButton>
    </Container>
  );
};
