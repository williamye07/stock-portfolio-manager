/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import ContentContainer from '../shared-components/ContentContainer';
import ContentPopout from '../shared-components/ContentPopout';

class Home extends React.Component {
  render() {
    return (
      <ContentContainer>
        <ContentPopout>Home</ContentPopout>
      </ContentContainer>
    );
  }
}
export default Home;
