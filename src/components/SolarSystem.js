import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    const cards = planets.map((planet) => (<PlanetCard
      planetName={ planet.name }
      planetImage={ planet.image }
      key={ planet.name }
    />));
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {cards}
      </div>
    );
  }
}

export default SolarSystem;
