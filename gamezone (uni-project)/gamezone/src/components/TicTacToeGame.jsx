import React, { useState } from 'react';
import './TicTacToeGame.css';

const TicTacToeGame = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? '🐱' : '🐶'; // Use emojis for X and O
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="tic-tac-toe">
      <h2>🐾 Tic Tac Toe 🐾</h2>
      <p className="subtitle">Cats vs Dogs! Who will win?</p>
      <div className="board">
        {board.map((cell, index) => (
          <div
            key={index}
            className={`cell ${cell ? 'filled' : ''}`}
            onClick={() => handleClick(index)}
          >
            {cell}
          </div>
        ))}
      </div>
      <div className="status">
        {winner
          ? `🎉 Winner: ${winner} 🎉`
          : board.every((cell) => cell)
          ? 'It\'s a Draw! 🐾'
          : `Next Turn: ${isXNext ? '🐱' : '🐶'}`}
      </div>
      <button onClick={resetGame}>Restart Game</button>
    </div>
  );
};

const calculateWinner = (board) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};

export default TicTacToeGame;
