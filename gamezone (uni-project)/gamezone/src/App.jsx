import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import GamesPage from './components/GamesPage';
import AboutPage from './components/AboutPage';
import WorkInDevelopmentPage from './components/WorkInDevelopmentPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import './App.css';
import GamePlayPage from './components/GamePlayPage';
import TicTacToeGame from './components/TicTacToeGame';
import PinballGame from './components/PinballGame';

function App() {
  return (
    <Router>
      <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/work-in-development" element={<WorkInDevelopmentPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/play-match-game" element={<GamePlayPage />} />
          <Route path="/tic-tac-toe" element={<TicTacToeGame />} />
          <Route path="/pinball" element={<PinballGame />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;