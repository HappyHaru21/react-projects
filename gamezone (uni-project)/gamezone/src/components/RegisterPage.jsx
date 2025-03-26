import React, { useState } from 'react';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Clear input fields and show success message
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setSuccessMessage('Successfully registered! You can now log in.');
  };

  return (
    <main style={{ height: '69vh', padding: '2rem', textAlign: 'center' }}>
      <h2>Register</h2>
      {successMessage ? (
        <div>
          <p>{successMessage}</p>
          <a href="/login">Go to Login</a>
        </div>
      ) : (
        <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{ margin: '0.5rem', padding: '0.5rem', width: '300px' }}
          />
          <button type="submit" style={{ margin: '1rem', padding: '0.5rem 1rem' }}>Register</button>
        </form>
      )}
    </main>
  );
};

export default RegisterPage;