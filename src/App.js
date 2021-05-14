import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/" />
      <Route>404 page</Route>
    </Switch>
  );
}

export default App;
