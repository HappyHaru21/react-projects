import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Check credentials
    if (email === 'sidak@vit.com' && password === 'tanisha') {
      setErrorMessage('');
      setShowPopup(true); // Show success popup
    } else {
      setErrorMessage('Wrong credentials. Please try again.');
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    navigate('/'); // Redirect to homepage
  };

  return (
    <main style={{ height: '69vh', padding: '2rem', textAlign: 'center' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ margin: '0.5rem', padding: '0.5rem', width: '300px' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ margin: '0.5rem', padding: '0.5rem', width: '300px' }}
        />
        <button type="submit" style={{ margin: '1rem', padding: '0.5rem 1rem' }}>Login</button>
      </form>
      {errorMessage && <p style={{ color: 'red', marginTop: '1rem' }}>{errorMessage}</p>}
      <p>Don't have an account? <a href="/register">Register here</a></p>

      {/* Popup for successful login */}
      {showPopup && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#fff',
            padding: '2rem',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
            textAlign: 'center',
            color:'#8A2BE2',
            backgroundColor: '#1C1F26'
          }}
        >
          <h3>Login Successful!</h3>
          <button
            onClick={handleClosePopup}
            style={{
              marginTop: '1rem',
              padding: '0.5rem 1rem',
              backgroundColor: '#8A2BE2',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Close
          </button>
        </div>
      )}
    </main>
  );
};

export default LoginPage;