import React from 'react';

const Header = () => {
  return (
    <header>
      <img src="./assets/logo.png" alt="Logo" />
      <h1>GameZone</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/games">All Games</a></li>
          <li><a href="/about-us">About</a></li>
        </ul>
      </nav>
      <div className="auth-links">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>
    </header>
  );
};

export default Header;