import React from 'react';
import Title from '../Title/Title';
import missions from '../../data/missions';
import MissionCard from '../MissionCard/MissionCard';
import './Missions.css';

class Missions extends React.Component {
  render() {
    const cards = missions.map((mission) => (<MissionCard
      name={ mission.name }
      year={ mission.year }
      country={ mission.country }
      destination={ mission.destination }
      key={ mission.name }
    />));
    return (
      <section
        className="missions-section"
        data-testid="missions"
      >
        <Title headline="Missões Espaciais" />
        <div className="missions-container">
          {cards}
        </div>
      </section>
    );
  }
}

export default Missions;
