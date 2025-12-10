import React, { useState, useEffect } from 'react';
import TrendingGifs from '../components/TrendingGifs';
import RandomGif from '../components/RandomGif';

const HomePage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuthPrompt, setShowAuthPrompt] = useState(false);

  
  useEffect(() => {
    const authState = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authState);
  }, []);

  const handleRandomGifClick = () => {
    if (!isAuthenticated) {
      setShowAuthPrompt(true);
    }
  };

  const closeAuthPrompt = () => {
    setShowAuthPrompt(false);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ marginBottom: '30px', textAlign: 'center' }}>
        <h1>Welcome to GIF Gallery</h1>
        <p>Browse trending GIFs and discover new favorites!</p>
        
        {!isAuthenticated && (
          <div style={{ marginTop: '20px' }}>
            <button 
              onClick={() => {
                localStorage.setItem('isAuthenticated', 'true');
                setIsAuthenticated(true);
              }}
              style={{
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                marginRight: '10px'
              }}
            >
              Sign Up
            </button>
            <button 
              onClick={() => {
                localStorage.setItem('isAuthenticated', 'true');
                setIsAuthenticated(true);
              }}
              style={{
                padding: '10px 20px',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Login
            </button>
          </div>
        )}
        
        {isAuthenticated && (
          <div style={{ marginTop: '10px' }}>
            <p style={{ color: '#28a745' }}>Welcome! You are logged in.</p>
            <button 
              onClick={() => {
                localStorage.setItem('isAuthenticated', 'false');
                setIsAuthenticated(false);
              }}
              style={{
                padding: '5px 10px',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Logout
            </button>
          </div>
        )}
      </header>

      <main>
        <TrendingGifs />
        
        <div style={{ marginTop: '40px' }}>
          <h2>Random GIF Generator</h2>
          <RandomGif isAuthenticated={isAuthenticated} onAuthRequired={handleRandomGifClick} />
        </div>
      </main>

      {showAuthPrompt && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '8px',
            textAlign: 'center',
            maxWidth: '400px'
          }}>
            <h3>Authentication Required</h3>
            <p>Please log in or sign up to generate random GIFs.</p>
            <div>
              <button 
                onClick={() => {
                  localStorage.setItem('isAuthenticated', 'true');
                  setIsAuthenticated(true);
                  closeAuthPrompt();
                }}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  marginRight: '10px'
                }}
              >
                Sign Up
              </button>
              <button 
                onClick={() => {
                  localStorage.setItem('isAuthenticated', 'true');
                  setIsAuthenticated(true);
                  closeAuthPrompt();
                }}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  marginRight: '10px'
                }}
              >
                Login
              </button>
              <button 
                onClick={closeAuthPrompt}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#6c757d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;