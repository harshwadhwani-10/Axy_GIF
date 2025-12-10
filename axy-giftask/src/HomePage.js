import React, { useState, useEffect } from 'react';
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
              
            >
              Sign Up
            </button>
            <button 
              onClick={() => {
                localStorage.setItem('isAuthenticated', 'true');
                setIsAuthenticated(true);
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

            <h3>Authentication Required</h3>
            <p>Please log in or sign up to generate random GIFs.</p>
            <div>
              <button 
                onClick={() => {
                  localStorage.setItem('isAuthenticated', 'true');
                  setIsAuthenticated(true);
                  closeAuthPrompt();
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
              >
                Login
              </button>
              <button 
                onClick={closeAuthPrompt}
              >
                Cancel
              </button>
            </div>
          </div>
  );
};

export default HomePage;
