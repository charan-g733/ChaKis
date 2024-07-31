// src/components/AnimatedComponent/AnimatedComponent.js
import React, { useRef } from 'react';
import useOnScreen from '../../hooks/useOnScreen';
import '../../styles/animation.css';

const AnimatedComponent = ({ children }) => {
  const ref = useRef();
  const onScreen = useOnScreen(ref);

  return (
    <div ref={ref} className={`fade-in ${onScreen ? 'show' : ''}`}>
      {children}
    </div>
  );
};

export default AnimatedComponent;
