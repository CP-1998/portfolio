import './App.css';
import Spinner from './components/spinner';
import React, { useState, useEffect } from 'react';

function App() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [percentWatch, setPercentWatch] = useState(0);
  const phrases = [
    "Looking for a skilled full-stack web developer?",
    "You just found one."
  ];
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const [percentBool, setPercentBool] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [phrases.length]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const content = document.getElementById('destructibleHello');
      if (content) {
        content.remove();
      }
    }, 8000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    async function updatePercent() {
      await sleep(8400);
      setPercentBool(true);
      for (let i = 0; i <= 100; i++) {
        await sleep(70);
        setPercentWatch(i);
      };
    };

    updatePercent();
  }, []);

  useEffect(() => {
    const helloElement = document.getElementById('destructibleHello');
    if (helloElement) {
      helloElement.classList.remove('hello');
      // Trigger reflow to restart the animation
      void helloElement.offsetWidth;
      helloElement.classList.add('hello');
    }
  }, [currentPhraseIndex]);

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
          {percentBool && <p className="percentWatch" id="percentElem">{percentWatch}%</p>}
          <br></br>
          <Spinner />
        </div>
        <p className="hello" id='destructibleHello'>{phrases[currentPhraseIndex]}</p>
      </div>
    </div>
  );
}

export default App;
