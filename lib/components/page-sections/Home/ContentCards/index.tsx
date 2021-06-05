import { ContentCard } from '../../../design-system';
import {
  Section,
  TopRowContainer,
  BottomRowContainer,
} from './styled';
import { contentCards } from '../../../../content';
import { VerticalSpace } from '../../../styled';

export const ContentCards = () => {
  return (
    <Section>
      <TopRowContainer>
        <ContentCard
          theme='white'
          heading='I think that'
          text={contentCards.I_THINK_THAT}
        />
        <ContentCard
          theme='black'
          heading='things I like'
          text={contentCards.THINGS_I_LIKE}
          reverse
        />
      </TopRowContainer>
      <VerticalSpace amount='1.8rem' />
      <BottomRowContainer>
        <ContentCard
          theme='problems'
          heading='Problems'
          text={contentCards.PROBLEMS}
        />
        <ContentCard
          theme='solutions'
          heading='Solutions'
          text={contentCards.SOLUTIONS}
        />
      </BottomRowContainer>
    </Section>
  );
};
