import React, { useState } from 'react';

const GifCard = ({ gif, showTitle = false }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  if (!gif) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>No GIF data available</div>;
  }

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      overflow: 'hidden',
      backgroundColor: '#f8f9fa',
      transition: 'transform 0.2s',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{ 
        position: 'relative', 
        paddingTop: '100%', 
        backgroundColor: '#e9ecef'
      }}>
        {!imageLoaded && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            Loading...
          </div>
        )}
        
        {imageError ? (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#6c757d'
          }}>
            Failed to load image
          </div>
        ) : (
          <img
            src={gif.images?.fixed_height?.url || gif.url}
            alt={gif.title || 'GIF'}
            onLoad={handleImageLoad}
            onError={handleImageError}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: imageLoaded && !imageError ? 'block' : 'none'
            }}
          />
        )}
      </div>
      
      {(showTitle || gif.title) && (
        <div style={{ 
          padding: '10px', 
          textAlign: 'center',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <h3 style={{ 
            margin: 0, 
            fontSize: '14px', 
            fontWeight: 'normal',
            wordBreak: 'break-word'
          }}>
            {gif.title || 'Untitled GIF'}
          </h3>
        </div>
      )}
      
      <div style={{ 
        padding: '5px 10px', 
        backgroundColor: '#e9ecef',
        textAlign: 'center',
        fontSize: '12px',
        color: '#6c757d'
      }}>
        Click to view
      </div>
    </div>
  );
};

export default GifCard;