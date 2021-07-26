import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'components/UI/Button';
import { BUTTON_SIZE, BUTTON_COLOR, ROUTES } from 'utils/constants';

import { NotFound, Header, SubHeader, InfoText, ButtonContainer } from './styles';

const NotFoundPage = () => {
  return (
    <NotFound>
      <Header>404</Header>
      <SubHeader>Sorry, this page not found</SubHeader>
      <InfoText>Ooops! Page you are looking for does not exists. It might have been moved or deleted.</InfoText>
      <ButtonContainer>
        <Button 
          to={ROUTES.dashboard}
          size={BUTTON_SIZE.MEDIUM}
          color={BUTTON_COLOR.PRIMARY}
          isLink
          as={Link}
        >
          Dashboard
        </Button>
      </ButtonContainer>
    </NotFound>
  );
};

export default NotFoundPage;
