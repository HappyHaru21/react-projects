import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './GameCard.css';

const GameCard = ({ title, description, imageUrl, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      window.location.href = link;
    }
  };

  return (
    <div className="game-card" onClick={handleClick} style={{ cursor: link ? 'pointer' : 'default' }}>
      <img src={imageUrl} alt={title} className="game-card-image" />
      <div className="game-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

GameCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default GameCard;