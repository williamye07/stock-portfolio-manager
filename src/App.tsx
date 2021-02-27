import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './Pages/Home';
import Holdings from './Pages/Holdings';
import Transactions from './Pages/Transactions';
import Watchlist from './Pages/Watchlist';

import HeaderBanner from './HeaderBanner';

export default function App() {
  return (
    <div>
      <Router>
        <HeaderBanner />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Holdings" component={Holdings} />
          <Route path="/Watchlist" component={Watchlist} />
          <Route path="/Transactions" component={Transactions} />
        </Switch>
      </Router>
    </div>
  );
}
