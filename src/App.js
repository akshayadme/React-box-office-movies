import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Components/Pages/Home';
import Starred from './Components/Pages/Starred';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/starred" component={Starred} />
        <Route>404 page</Route>
      </Switch>
    </>
  );
}

export default App;
