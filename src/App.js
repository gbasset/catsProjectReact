import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';

import Header from './components/Header/Header'
import InfinityScrollContainer from './components/InfinityScroll/InfinityScrollContainer'
import Home from './components/Acc/Home'
import Erreur from './components/Erreur/Erreur'

import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import SearchCatContainer from './components/SearchCat/SearchCatContainer';
import CasinoCatsContainer from './components/CasinoCats/CasinoCatsContainer';
import Context from './Context/Context'
function App() {

  return (
    <Router
      forceRefresh={true}>
      <Header />
      <Context>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/infinityScroll" component={InfinityScrollContainer} />
            <Route exact path="/searchCat" component={SearchCatContainer} />
            <Route exact path="/casinoCats" component={CasinoCatsContainer} />
            <Route exact path="" component={Erreur} />
          </Switch>
        </div >
      </Context>

    </Router>
  )
}
export default App
