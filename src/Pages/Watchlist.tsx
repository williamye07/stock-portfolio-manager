/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import ContentContainer from '../shared-components/ContentContainer';
import ContentPopout from '../shared-components/ContentPopout';

class Watchlist extends React.Component {
  render() {
    return (
      <ContentContainer>
        <ContentPopout>Watchlist</ContentPopout>
      </ContentContainer>
    );
  }
}
export default Watchlist;
