import React from 'react';
import developmentImage from '../assets/development.svg';

const WorkInDevelopmentPage = () => {
  return (
    <main style={{ height: '69vh', padding: '2rem', textAlign: 'center' }}>
      <h2>Work in Development</h2>
      <p>This game is currently under development. Please check back later!</p>
      <img src={developmentImage} alt="Work in Development" style={{ width: '200px', height: '200px', marginTop: '2rem' }} />
    </main>
  );
};

export default WorkInDevelopmentPage;