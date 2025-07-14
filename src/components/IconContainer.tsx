import React from 'react';

// This is the code for the selected div element
const IconContainer = () => {
  return (
    <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm">
      <img 
        src="/images/Icon_3.png" 
        alt="Custom Icon" 
        className="w-12 h-12"
      />
    </div>
  );
};

export default IconContainer;