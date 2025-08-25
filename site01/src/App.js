import logo from './logo.svg';
import './App.css';

import { store } from './WORKING SPACE/Store/Store';

import FuncFold from './WORKING SPACE/Page01';
import { Provider } from 'react-redux';
import { createContext } from 'react';


function App() {
  

  return (
    <div className="App">

      <Provider store={store}>
          <FuncFold/>
      </Provider>
      
      
      
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
