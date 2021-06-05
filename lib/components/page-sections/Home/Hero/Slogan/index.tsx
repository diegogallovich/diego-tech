import {
  Container,
  SloganText,
  ProblemSpan,
  SolutionsSpan,
} from './styled';

export const Slogan = () => {
  return (
    <Container>
      <SloganText>
        <span>For every</span>{' '}
        <ProblemSpan>problem,</ProblemSpan>{' '}
        <span>there are</span>{' '}
        <SolutionsSpan>
          many solutions.
        </SolutionsSpan>
      </SloganText>
    </Container>
  );
};
