import React from 'react';
import Header from './components/Header/Header';
import Missions from './components/Missions/Missions';
import SolarSystem from './components/SolarSystem/SolarSystem';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        <Missions />
      </>
    );
  }
}

export default App;
