import React, { useState, useEffect } from 'react';

const PhotoMatchGame = () => {
  // Game state
  const [cards, setCards] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60); // Default time for easy mode
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gridSize, setGridSize] = useState(6); // Default grid size for easy mode

  // Images for the cards (using placeholder images)
  const imageUrls = [
    'https://picsum.photos/id/1/100/100',
    'https://picsum.photos/id/10/100/100',
    'https://picsum.photos/id/20/100/100',
    'https://picsum.photos/id/30/100/100',
    'https://picsum.photos/id/40/100/100',
    'https://picsum.photos/id/50/100/100',
    'https://picsum.photos/id/60/100/100',
    'https://picsum.photos/id/70/100/100',
    'https://picsum.photos/id/80/100/100',
    'https://picsum.photos/id/90/100/100',
    'https://picsum.photos/id/100/100/100',
    'https://picsum.photos/id/110/100/100',
    'https://picsum.photos/id/120/100/100',
    'https://picsum.photos/id/130/100/100',
    'https://picsum.photos/id/140/100/100',
    'https://picsum.photos/id/150/100/100',
    'https://picsum.photos/id/160/100/100',
    'https://picsum.photos/id/170/100/100',
  ];

  // Initialize game
  const initializeGame = () => {
    // Create card pairs based on grid size
    const pairsCount = (gridSize * gridSize) / 2; // Each card has a pair
    const pairs = [];
    
    for (let i = 0; i < pairsCount; i++) {
      pairs.push({ id: i, imageUrl: imageUrls[i % imageUrls.length], matched: false });
      pairs.push({ id: i + 100, imageUrl: imageUrls[i % imageUrls.length], matched: false });
    }

    // Shuffle the cards
    const shuffled = [...pairs].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setFlippedIndices([]);
    setMatchedPairs([]);
    setScore(0);

    // Set time based on selected difficulty
    switch (gridSize) {
      case 6:
        setTimeLeft(90); // Easy mode
        break;
      case 8:
        setTimeLeft(180); // Medium mode
        break;
      case 10:
        setTimeLeft(180); // Hard mode
        break;
      default:
        setTimeLeft(60);
        break;
    }

    setGameOver(false);
    setGameStarted(true);
  };

  // Handle card click
  const handleCardClick = (index) => {
    if (gameOver || flippedIndices.includes(index) || matchedPairs.includes(cards[index].id)) {
      return;
    }

    const newFlippedIndices = [...flippedIndices, index];
    setFlippedIndices(newFlippedIndices);

    if (newFlippedIndices.length === 2) {
      const [firstIndex, secondIndex] = newFlippedIndices;
      
      if (cards[firstIndex].imageUrl === cards[secondIndex].imageUrl) {
        setMatchedPairs([...matchedPairs, cards[firstIndex].id, cards[secondIndex].id]);
        setScore(score + 1);
        setFlippedIndices([]);
      } else {
        setTimeout(() => {
          setFlippedIndices([]);
        }, 1000);
      }
    }
  };

  // Timer effect
  useEffect(() => {
    let timer;
    
    if (gameStarted && !gameOver && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      
      return () => clearInterval(timer);
      
    } else if (timeLeft === 0) {
      setGameOver(true);
    }
    
  }, [gameStarted, gameOver, timeLeft]);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Photo Match Game</h2>
      
      <div style={{ margin: '20px 0' }}>
        <p>Time Left: {timeLeft} seconds | Score: {score} / {(gridSize * gridSize) / 2}</p>
        
        {/* Difficulty Selection */}
        {!gameStarted && (
          <select 
            onChange={(e) => { 
              setGridSize(Number(e.target.value)); 
            }} 
            style={{ marginBottom: '20px', padding: '10px' }}
          >
            <option value={6}>Easy (6x6)</option>
            <option value={8}>Medium (8x8)</option>
            <option value={10}>Hard (10x10)</option>
          </select>
        )}
        
        {!gameStarted && (
          <button 
            onClick={initializeGame} 
            style={{ 
              padding: '10px 20px', 
              backgroundColor: '#8A2BE2', 
              color: 'white', 
              border: 'none', 
              borderRadius: '5px', 
              cursor: 'pointer' 
            }}
          >
            Start Game
          </button>
        )}
        
        {gameStarted && (
          <button 
            onClick={() => {
              // Reset game state and ask for difficulty again
              setGameStarted(false);
              setGameOver(false);
              setCards([]);
              setFlippedIndices([]);
              setMatchedPairs([]);
              setScore(0);
              setTimeLeft(60); // Reset time to default
            }} 
            style={{ 
              padding: '10px 20px', 
              backgroundColor: '#8A2BE2', 
              color: 'white', 
              border: 'none', 
              borderRadius: '5px', 
              cursor: 'pointer' 
            }}
          >
            Restart Game
          </button>
        )}
      </div>
      
      {gameOver && (
        <div style={{ margin: '20px 0', color: '#A855F7' }}>
          <h3>Game Over!</h3>
          <p>Your final score: {score} / {(gridSize * gridSize) / 2}</p>
        </div>
      )}
      
      {gameStarted && (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`, 
          gap: '10px', 
          maxWidth: '700px', 
          margin: '0 auto' 
        }}>
          {cards.map((card, index) => (
            <div 
              key={index}
              onClick={() => handleCardClick(index)}
              style={{
                width: `${Math.floor(700 / gridSize)}px`,
                height: `${Math.floor(700 / gridSize)}px`,
                backgroundColor: flippedIndices.includes(index) || matchedPairs.includes(card.id) ? '#252932' : '#1C1F26',
                border: '2px solid #323844',
                borderRadius: '5px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                position: 'relative',
              }}
            >
              {(flippedIndices.includes(index) || matchedPairs.includes(card.id)) && (
                <>
                  <img 
                    src={card.imageUrl} 
                    alt="card" 
                    style={{ 
                      width: '90%', 
                      height: '90%', 
                      objectFit: 'cover',
                      opacity: matchedPairs.includes(card.id) ? '0.5' : '1'
                    }} 
                  />
                  {matchedPairs.includes(card.id) && (
                    <div style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}>
                      <div style={{
                        position: 'absolute',
                        width: '90%',
                        height: '3px',
                        backgroundColor: '#A855F7',
                        transform: 'rotate(45deg)'
                      }}></div>
                      <div style={{
                        position: 'absolute',
                        width: '90%',
                        height: '3px',
                        backgroundColor: '#A855F7',
                        transform: 'rotate(-45deg)'
                      }}></div>
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PhotoMatchGame;
