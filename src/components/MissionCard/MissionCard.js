import React from 'react';
import PropTypes from 'prop-types';
import './MissionCard.css';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div
        className="mission-card"
        data-testid="mission-card"
      >
        <h4
          data-testid="mission-name"
          className="mission-name"
        >
          { name }
        </h4>
        <p data-testid="mission-year">
          Ano:
          {' '}
          { year }
        </p>
        <p data-testid="mission-country">
          Países:
          {' '}
          { country }
        </p>
        <p data-testid="mission-destination">
          Destino:
          {' '}
          { destination }
        </p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
