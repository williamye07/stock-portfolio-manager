/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import ContentContainer from '../shared-components/ContentContainer';
import ContentPopout from '../shared-components/ContentPopout';

class Transactions extends React.Component {
  render() {
    return (
      <ContentContainer>
        <ContentPopout>Transactions</ContentPopout>
      </ContentContainer>
    );
  }
}
export default Transactions;
