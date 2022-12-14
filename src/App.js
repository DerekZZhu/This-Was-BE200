import { Route, Switch } from 'react-router-dom';
import React from 'react'

import Map from './components/Map.jsx'
import Home from './pages/Home.js'

import data from './data.json'
import COLORS from './COLORS.json'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>

        <Route path="/guides" exact>

        </Route>

        <Route path="/guides/san-fran">
          <Map data={data} theme={COLORS.rainbow}/>
        </Route>

        <Route path="/guides/:mapId">

        </Route>
      </Switch>
    </div>
  );
}

export default App;
