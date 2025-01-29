import './App.css';
import ProgressBar from './components/progress-bar.component.js';
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
    }, 4500);
    return () => clearInterval(interval);
  }, [phrases.length]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const content = document.getElementById('destructibleHello');
      if (content) {
        content.remove();
      }
    }, 9000);


    return () => clearTimeout(timeout);
  }, []);

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
        <div>
        </div>
        <p className="hello" id='destructibleHello'>{phrases[currentPhraseIndex]}</p>
      </div>
    </div >
  );
}

export default App;
