/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import { useEffect, useState } from "react";
//import "./styles.css";

const format = (timer) => {
  const mins = Math.floor(timer / 60);
  timer %= 60;
  return `Time:${mins}:${timer < 10 ? "0" : ""}${timer}`;
};
export default function App() {
  const [activate, setActivate] = useState(false);
  const [timer, setTimer] = useState(0);
  const toggle = () => {
    setActivate((prevActivate) => !prevActivate);
  };

  useEffect(() => {
    let intervalId;
    if (activate) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [activate]);

  const reset = () => {
    setTimer(0);
    setActivate(false);
  };

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <p>{format(timer)}</p>
      <button onClick={toggle}>{activate ? "Stop" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
