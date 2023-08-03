import React, { useState } from 'react';
import './swimlane.css'
const titles = ['Title 1', 'Title 2', 'Title 3', 'Title 4', 'Title 5', 'Title 6'];

const Swimlane = ({ cards }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleBoxes = showAll ? titles.length : 3;

  return (
    <div className="swimlane-container">
      {cards.slice(0, visibleBoxes).map((card, index) => (
        <div key={index} className="box">
          <h3> {card.id}</h3>&nbsp;&nbsp;AND&nbsp;&nbsp;
          <h3>{card.card_title}</h3>
        </div>
      ))}
      {!showAll && titles.length > 3 && (
        <button className="view-all-button" onClick={() => setShowAll(true)}>
          +All
        </button>
      )}
    </div>
  );
};

export default Swimlane;

