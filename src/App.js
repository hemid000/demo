import React, { useState } from 'react';
import Cursor from './cursor';
const FollowMouseComponent = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const calculateGradient = () => {
    const percentX = (cursorPosition.x / window.innerWidth) * 100;
    const percentY = (cursorPosition.y / window.innerHeight) * 100;

    const gradient = `radial-gradient(circle at ${percentX}% ${percentY}%, #403f78, #383870, #333266, #2f2e58, #2b2a4b, #222237, #1b1b27, #121212)`;

    return gradient;
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        position: 'relative',
        width: '100%',
        height: '400vh',
        background: calculateGradient(), // Corrected: Remove quotes
        transition: 'background 0.7s ease-in-out',
      }}
    >
      <Cursor />
      <div
        style={{
          position: 'absolute',
          left: `${cursorPosition.x - 25}px`,
          top: `${cursorPosition.y - 25}px`,
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          // backgroundColor: '#8F3FFC',
        }}
      />
    </div>
  );
};

export default FollowMouseComponent;
