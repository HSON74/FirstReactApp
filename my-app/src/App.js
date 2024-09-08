import logo from './logo.svg';
import './App.css';

// My First button in the First React APP
function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onclick = {handleClick}>LINK</button>
  );

}

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
        <MyButton />
        
      </header>
    </div>
  );

}

export default App;
