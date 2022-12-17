import { Route, Switch } from 'react-router-dom';
import React from 'react'

import Map from './components/Map.jsx'
import Home from './pages/Home.js'
import Nav from './components/Nav.jsx'

import data from './data.json'
import COLORS from './COLORS.json'

import {useState} from 'react'

function App() {
  const setDark = () => {
    localStorage.setItem('theme', 'dark')
    document.documentElement.setAttribute('data-theme', 'dark')
  }

  const setLight = () => {
    localStorage.setItem('theme', 'light');
    document.documentElement.setAttribute("data-theme", "light")
  }

  const storedTheme = localStorage.getItem("theme")

  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches

  const defaultDark = storedTheme === "dark" || (storedTheme === null && prefersDark)
  const [isDark, setIsDark] = useState(defaultDark)

  if(isDark) {
    setDark()
  } else {
    setLight()
  }

  function toggleTheme(pass) {
    console.log(pass);
    setIsDark(pass)
  }


  return (
    <div className="App">
      <Nav theme={isDark} passup={toggleTheme}/>
      <Switch>
         <Route path="/home">
            <Home theme={isDark}/>
         </Route>

         <Route path="/guides" exact>

         </Route>

         <Route path="/historic-walk">
           <Map data={data} card_theme={COLORS.rainbow} theme={isDark}/>
         </Route>

         <Route path="/guides/:mapId">

        </Route>
       </Switch>
    </div>
  );
}

export default App;
