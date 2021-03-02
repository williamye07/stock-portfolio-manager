/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import '@fontsource/nunito';

const ButtonClicked = styled(Button)`
  && {
    background-color: #ffffff;
    color: #64ccc9;
    font-family: 'Nunito';
    font-weight: Bold;
  }
`;

const ButtonDefault = styled(Button)`
  && {
    background-color: #64ccc9;
    color: #ffffff;
    font-family: 'Nunito';
    font-weight: Bold;
  }
`;

const MenuButton = ({ ButtonText, Clicked, exact, to, component }) => {
  return Clicked ? (
    <ButtonClicked
      className="Clicked-Button"
      variant="contained"
      exact={exact}
      to={to}
      component={component}
    >
      {ButtonText}
    </ButtonClicked>
  ) : (
    <ButtonDefault
      className="Default-Button"
      variant="contained"
      exact={exact}
      to={to}
      component={component}
    >
      {ButtonText}
    </ButtonDefault>
  );
};

MenuButton.propTypes = {
  ButtonText: PropTypes.string.isRequired,
  Clicked: PropTypes.bool.isRequired,
  exact: PropTypes.bool.isRequired,
  to: PropTypes.string.isRequired,
  component: PropTypes.elementType.isRequired,
};
export default MenuButton;
