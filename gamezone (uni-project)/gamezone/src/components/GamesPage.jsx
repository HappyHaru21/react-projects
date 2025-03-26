import React from 'react';
import GameCard from './GameCard';

const GamesPage = () => {
  return (
    <main style={{ height: '69vh', padding: '2rem', textAlign: 'center' }}>
      <h2>Games</h2>
      <p>Here you will find a collection of our exciting minigames!</p>
      
      <div className="featured-games">
          <GameCard 
            title="Memory Match" 
            description="Test your memory by finding matching pairs of cards." 
            imageUrl="./assets/gameposters/mixmatch.jpg" 
            link="/play-match-game"
          />
          <GameCard 
            title="Tic-Tac-Toe" 
            description="Enjoy the classic game of Tic-Tac-Toe with a friend." 
            imageUrl="./assets/gameposters/tictactoe.jpg" 
            link="/tic-tac-toe"
          />
          <GameCard 
            title="Whack-a-Mole" 
            description="Whack the moles as they pop up in this fast-paced game." 
            imageUrl="./assets/gameposters/whackamole.jpg" 
          />
          <GameCard 
            title="Pinball Game" 
            description="Control the paddle and keep the ball in play!" 
            imageUrl="./assets/gameposters/pinball.jpg" 
            link="/pinball"
          />
        </div>
    </main>
  );
};

export default GamesPage;