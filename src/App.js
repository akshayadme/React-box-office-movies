import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Home from './Components/Pages/Home';
import Show from './Components/Pages/Show';
import Starred from './Components/Pages/Starred';

const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/starred" component={Starred} />
          <Route exact path="/show/:id" component={Show} />
          <Route>404 page</Route>
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
