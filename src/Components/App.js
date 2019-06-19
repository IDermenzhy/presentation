import React from 'react';
import {Switch, Route, Redirect} from "react-router";
import {BrowserRouter} from "react-router-dom";

import Suspense from './Pages/Suspense'
import State from './Pages/State'
import Effect from './Pages/Effect'
import Context from './Pages/Context'
import Callback from './Pages/Callback'
import Memo from './Pages/Memo'
import Ref from './Pages/Ref'
import Home from './Pages/Home'

const  App = ()  => {
  return (
  <BrowserRouter>
    <Switch>
      <Route component={Suspense} path={'/suspense'}/>
      <Route component={State} path={'/state'}/>
      <Route component={Effect} path={'/effect'}/>
      <Route component={Ref} path={'/ref'}/>
      <Route component={Context} path={'/context'}/>
      <Route component={Memo} path={'/memo'}/>
      <Route component={Callback} path={'/callback'}/>
      <Route component={Home} path={'/'} exact/>
      <Redirect to={'/'}/>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
