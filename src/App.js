import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
		alert('inside usseEffect');
		const script = document.createElement('script');
		script.type = 'text/javascript';
		script.addEventListener('load', () => {
			alert('loaded script');
			window.my = true;
			// setVodapay(true);
		});
		script.src = 'https://appx/web-view.min.js';
		document.getElementsByTagName('head')[0].appendChild(script);
		alert('script created');
	}, []);
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

export default App;
