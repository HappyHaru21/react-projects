import React from 'react';
import GameCard from './GameCard';

const HomePage = () => {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <section>
        <h2>Welcome to GameZone</h2>
        <p>Explore our collection of exciting minigames!</p>
      </section>
      
      <section>
        <h3>Featured Games</h3>
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
            title="Pinball Game" 
            description="Control the paddle and keep the ball in play!" 
            imageUrl="./assets/gameposters/pinball.jpg" 
            link="/pinball"
          />
        </div>
      </section>
      
      <section>
        <h3>Contact Us</h3>
        <p>If you have any questions or feedback, feel free to reach out to us:</p>
        <p>Email: support@gamezone.com</p>
        <p>Phone: (123) 456-7890</p>
      </section>
      
      <section>
        <h3>Follow Us</h3>
        <div className="social-media-links">
          <a href="https://github.com/HappyHaru21" target="_blank" rel="noopener noreferrer">Github</a>
          <a href="https://discordapp.com/users/547370864400924684" target="_blank" rel="noopener noreferrer">Discord</a>
          <a href="https://www.instagram.com/happyharu_21" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </section>
      
      <section>
        <button onClick={() => window.location.href='/games'}>Explore Games</button>
      </section>
    </main>
  );
};

export default HomePage;