import React from 'react';
import './App.css';
import GiphyBoard from './components/GiphyBoard/GiphyBoard';


function App() {


  return (
    <div className='App'>
      <header className="App-header">
        <h1>GIPHY SEARCH</h1>

        <GiphyBoard />
      </header>
    </div>
  );
}

export default App;
