import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Home from './Pages/Home';
import Holdings from './Pages/Holdings';
import Transactions from './Pages/Transactions';
import Watchlist from './Pages/Watchlist';

import HeaderBanner from './HeaderBanner';

const AppContainer = styled.div`
  height: 100vh;
`;



export default function App() {
  return (
    <AppContainer>
      <Router>
        <HeaderBanner />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Holdings" component={Holdings} />
          <Route path="/Watchlist" component={Watchlist} />
          <Route path="/Transactions" component={Transactions} />
        </Switch>
      </Router>
    </AppContainer>
  );
}
