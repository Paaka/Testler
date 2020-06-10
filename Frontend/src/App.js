import React from 'react';
import Routes from './Routes/Routes';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import BasicView from './views/BasicView';
import NewSetView from './views/NewSetView/NewSetView';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={Routes.main}>
          <BasicView></BasicView>
        </Route>
        <Route path={Routes.newset}>
          <NewSetView></NewSetView>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
