import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const phrases = [
    "Looking for a skilled full-stack web developer?",
    "You just found one."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 4400);

    return () => clearInterval(interval);
  }, [phrases.length]);


  return (
    <div className="App">
      <div className="container">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="content">
        <p className="hello">{phrases[currentPhraseIndex]}</p>
      </div>
    </div >
  );
}

export default App;
