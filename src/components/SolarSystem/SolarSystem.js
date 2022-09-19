import React from 'react';
import planets from '../../data/planets';
import PlanetCard from '../PlanetCard/PlanetCard';
import './SolarSystem.css';

class SolarSystem extends React.Component {
  render() {
    const cards = planets.map((planet) => (<PlanetCard
      planetName={ planet.name }
      planetImage={ planet.image }
      key={ planet.name }
    />));
    return (
      <section data-testid="solar-system">
        <div className="planets-container">
          {cards}
        </div>
      </section>
    );
  }
}

export default SolarSystem;
