import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import NavBar from './components/navbar/NavBar';
import Home from "./components/home/Home";
import Characters from './components/characters/Characters';
import CharacterDetail from './components/characterDetails/CharacterDetail';
import Episodes from './components/episodes/Episodes';
//import episodeDetail from './components/episodeDetail/episodeDetail.js';

function App() {
  return (
  <div className = 'App'>
    <Route path='/' component={NavBar}/>
    <Route exact path='/' component={Home}/>
    <Route exact path='/characters' component={Characters}/>
    <Route exact path='/characters/:id' component={CharacterDetail}/>
    <Route exact path='/episodes' component={Episodes}/>
    {/* <Rout exact path='/episodes/:id' component={episodeDetail}/> */}
  </div>
  );
}
export default App;
