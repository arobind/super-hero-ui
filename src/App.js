import React from 'react';
import './App.css';
import HeroSearch from './HeroSearch.jsx';
import HeroNav from './HeroNav.jsx';

function App() {
  return (
    <div className="App">
      <HeroNav/>
      <HeroSearch/>
    </div>
  );
}

export default App;
