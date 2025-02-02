import './App.css';
import Spinner from './components/spinner';
import './components/animatedLangs';
import React, { useState, useEffect } from 'react';
import AnimatedLangs from './components/animatedLangs';

function App() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [percentWatch, setPercentWatch] = useState(0);
  const phrases = [
    "Looking for a skilled full-stack web developer?",
    "You just found one."
  ];
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const [percentBool, setPercentBool] = useState(false);
  const [spinningTrue, setSpinningTrue] = useState(true);
  const [langVis, setLangVis] = useState(false);

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
    async function destroyLoading() {
      await sleep(18500);
      setPercentBool(false);
      setSpinningTrue(false);
      await sleep(1000);
      setLangVis(true);
    };
    destroyLoading();
  }, [percentBool]);

  useEffect(() => {
    const helloElement = document.getElementById('destructibleHello');
    if (helloElement) {
      helloElement.classList.remove('hello');
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
          {spinningTrue && <Spinner id="spinnerObj"/>}
          {langVis && <AnimatedLangs />}
        </div>
        <p className="hello" id='destructibleHello'>{phrases[currentPhraseIndex]}</p>
      </div>
    </div>
  );
}

export default App;
