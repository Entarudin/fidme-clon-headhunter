import { FC } from 'react';
import { Container, ErrorText, StyledLink } from './styles';

export const ErrorPage: FC = () => (
  <Container>
    <ErrorText id="error-text">
      <img src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="401" />
      <span>Ooops Error!</span>
      <p className="p-a">Look like you`re lost, the page you are looking for not available!</p>
      <StyledLink to="/" id="navlinkHomePage">
        <p className="back">Go back to the home page</p>
      </StyledLink>
    </ErrorText>
  </Container>
);
