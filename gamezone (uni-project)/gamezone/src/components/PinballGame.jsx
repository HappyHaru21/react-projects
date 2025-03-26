import React, { useRef, useState, useEffect } from 'react';

const PinballGame = () => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false); // Track if the game has started
  const paddleXRef = useRef(200); // Use useRef for paddle position
  const paddleWidth = 100;
  const paddleHeight = 10;
  const ball = useRef({ x: 150, y: 150, speedX: 1, speedY: 2 });

  const drawBall = (ctx) => {
    ctx.beginPath();
    ctx.arc(ball.current.x, ball.current.y, 10, 0, Math.PI * 2);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
  };

  const drawPaddle = (ctx) => {
    ctx.fillStyle = 'blue';
    ctx.fillRect(paddleXRef.current, ctx.canvas.height - 20, paddleWidth, paddleHeight);
  };

  const moveBall = (ctx) => {
    if (gameOver) return; // Prevent ball movement and score updates if the game is over

    const canvas = ctx.canvas;
    ball.current.x += ball.current.speedX;
    ball.current.y += ball.current.speedY;

    if (ball.current.x + 10 > canvas.width || ball.current.x - 10 < 0) {
      ball.current.speedX *= -1;
    }

    if (ball.current.y - 10 < 0) {
      ball.current.speedY *= -1;
    }

    if (
      ball.current.y + 10 > canvas.height - 20 &&
      ball.current.x > paddleXRef.current &&
      ball.current.x < paddleXRef.current + paddleWidth
    ) {
      ball.current.speedY *= -1;
      setScore((prev) => prev + 1);
    }

    if (ball.current.y + 10 > canvas.height) {
      setGameOver(true);
      setGameStarted(false); // Stop the game
    }
  };

  const draw = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall(ctx);
    drawPaddle(ctx);
    moveBall(ctx);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft' && paddleXRef.current > 0) {
      paddleXRef.current -= 20;
    }
    if (e.key === 'ArrowRight' && paddleXRef.current < canvasRef.current.width - paddleWidth) {
      paddleXRef.current += 20;
    }
  };

  const startGame = () => {
    setScore(0);
    setGameOver(false);
    setGameStarted(true);
    ball.current = { x: 150, y: 150, speedX: 1, speedY: 2 };
    const interval = setInterval(() => {
      if (!gameOver) {
        draw();
      } else {
        clearInterval(interval);
      }
    }, 16);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <canvas
        ref={canvasRef}
        id="pinball"
        width="500"
        height="500"
        style={{
          display: gameStarted ? 'block' : 'none', // Hide canvas if the game hasn't started
          margin: '50px auto',
          backgroundColor: 'black',
          border: '2px solid white',
        }}
      ></canvas>
      <div style={{ position: 'absolute', left: '1200px', top: '300px', padding: '20px', color:'#8A2BE2', backgroundColor:"#1C1F26" }}>
        <p>Score: {score}</p>
      </div>
      {!gameStarted && !gameOver && (
        <button
          onClick={startGame}
          style={{
            position: 'absolute',
            left: '1225px',
            top: '200px',
            padding: '10px',
            backgroundColor: '#4da6ff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          Start Cats vs Dogs
        </button>
      )}
      {gameOver && (
        <div style={{ color: 'white', marginTop: '20px' }}>
          <h2>You Lost Cats vs Dogs!</h2>
          <p>Your Score: {score}</p> {/* Display the final score */}
          <button
            onClick={startGame}
            style={{
              padding: '10px',
              backgroundColor: '#4da6ff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
            }}
          >
            Restart Cats vs Dogs
          </button>
        </div>
      )}
      {!gameOver && (
        <h3 style={{ color: 'white' }}>Press Left/Right Arrow Keys to Move the Paddle in Cats vs Dogs</h3>
      )}
    </div>
  );
};

export default PinballGame;
