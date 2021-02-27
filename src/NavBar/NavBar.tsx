/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Link as RouterLink, HashRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

import MenuButton from './MenuButton';

const NavBar = () => {
  return (
    <div>
      <MenuButton
        Clicked
        ButtonText="Home"
        component={RouterLink}
        exact
        to="/"
      />
      <MenuButton
        Clicked
        ButtonText="Holdings"
        component={RouterLink}
        to="/Holdings"
      />
      <MenuButton
        Clicked
        ButtonText="Watchlist"
        component={RouterLink}
        to="/Watchlist"
      />
      <MenuButton
        Clicked
        ButtonText="Transactions"
        component={RouterLink}
        to="/Transactions"
      />
    </div>
  );
};

export default NavBar;
