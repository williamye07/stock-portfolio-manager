/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import styled from 'styled-components';

import MenuButton from './NavBar/MenuButton';
import NavBar from './NavBar/NavBar';

const HeaderBlockStyled = styled.div`
  background-color: #00b2a9;
  height: 200px;
  width: 100%;
`;

class HeaderBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <HeaderBlockStyled>
        <NavBar />
      </HeaderBlockStyled>
    );
  }
}

export default HeaderBanner;
