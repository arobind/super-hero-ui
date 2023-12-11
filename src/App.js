import React from 'react';
import './App.css';
import HeroSearch from './HeroSearch.jsx';
import HeroNav from './HeroNav.jsx';
import HeroDetails from './HeroDetails';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function MainApp() {
  return(<div className="App">
  <HeroNav/>
  <HeroSearch/>
</div>);
}



function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' Component={MainApp}/>
      <Route path='heroName' Component={HeroDetails} />
    </Routes>
    </Router>
  );
}

export default App;
