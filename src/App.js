import './App.css';
import React, {useState, useEffect} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import People from './Components/People.jsx'
import Planets from './Components/Planets'
import Search from './Components/Search'

function App() {

  return (
    <BrowserRouter className="App">
      <header className="App-header">
        <h1>Star Wars API</h1>
      <Search></Search>
      </header>
      <Switch>
        <Route path='/people/:id'>
          <People></People>
        </Route>
        <Route path='/planets/:id'>
          <Planets></Planets>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
