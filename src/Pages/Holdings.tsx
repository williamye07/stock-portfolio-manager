/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import ContentContainer from '../shared-components/ContentContainer';
import ContentPopout from '../shared-components/ContentPopout';

class Holdings extends React.Component {
  render() {
    return (
      <ContentContainer>
        <ContentPopout>Holdings</ContentPopout>
      </ContentContainer>
    );
  }
}
export default Holdings;
