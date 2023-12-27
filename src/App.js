import React, { useState } from 'react';
// import AnimatedCursor from "react-animated-cursor"

const FollowMouseComponent = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  // const colorSpread = 4.52;

  const handleMouseMove = (e) => {
    // Update the cursor position based on mouse coordinates
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const calculateGradient = () => {
    // Calculate gradient colors based on cursor position
    const percentX = (cursorPosition.x / window.innerWidth) * 100;
    const percentY = (cursorPosition.y / window.innerHeight) * 100;

    // Use CSS radial gradient with colors based on provided parameters
    const gradient = `radial-gradient(circle at ${percentX}% ${percentY}%, 
      #403f78, #383870, #333266, #2f2e58, #2b2a4b, #222237, #1b1b27, #121212)`;
  
    return gradient;
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        background: calculateGradient(), // Use calculateGradient function
        transition: 'background 0.7s ease-in-out', // Smooth transition effect
      }}
    >
      {/* <AnimatedCursor /> */}
      <div
        style={{
          position: 'absolute',
          left: `${cursorPosition.x - 25}px`, // Adjust for the circle's radius
          top: `${cursorPosition.y - 25}px`, // Adjust for the circle's radius
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          // backgroundColor: '#8F3FFC', // Purple color
        }}
      />
    </div>
  );
};

export default FollowMouseComponent;
