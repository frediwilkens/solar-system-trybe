import React from 'react';
import propTypes from 'prop-types';
import './PlanetCard.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    const alternativeText = `Planeta ${planetName}`;
    return (
      <div
        data-testid="planet-card"
        className="planet-card"
      >
        <img src={ planetImage } alt={ alternativeText } />
        <p
          className="planet-name"
          data-testid="planet-name"
        >
          { planetName }
        </p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: propTypes.string.isRequired,
  planetImage: propTypes.string.isRequired,
};

export default PlanetCard;
