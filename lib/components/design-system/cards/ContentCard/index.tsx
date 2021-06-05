import {
  CardContainer,
  CardText,
  CardHeading,
} from './styled';
import { VerticalSpace } from '../../../styled';

export const ContentCard = ({
  heading,
  text,
  reverse,
  theme,
}: {
  heading: string;
  text: string;
  reverse?: boolean;
  theme:
    | 'black'
    | 'white'
    | 'solutions'
    | 'problems';
}) => {
  return (
    <CardContainer theme={theme}>
      {reverse ? (
        <>
          <CardText theme={theme}>
            {text}
          </CardText>
          {/* <VerticalSpace amount='1.8rem' /> */}
          <CardHeading theme={theme}>
            {heading}
          </CardHeading>
        </>
      ) : (
        <>
          <CardHeading theme={theme}>
            {heading}
          </CardHeading>
          {/* <VerticalSpace amount='1.8rem' /> */}
          <CardText theme={theme}>
            {text}
          </CardText>
        </>
      )}
    </CardContainer>
  );
};
