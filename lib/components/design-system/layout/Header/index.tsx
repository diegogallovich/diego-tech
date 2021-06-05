import {
  Header as HeaderElement,
  Navigation,
  NavigationLogotypeContainer,
  NavigationLogo,
} from './styled';

export const Header = () => {
  return (
    <HeaderElement>
      <Navigation>
        <NavigationLogotypeContainer>
          {/* Mobile */}
          <NavigationLogo />
        </NavigationLogotypeContainer>
      </Navigation>
    </HeaderElement>
  );
};
