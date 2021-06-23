import React from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat'

function App() {
  return (
    <div className="app">
      
      {/* Sidebar */}
      <div className="app__body">
        <Sidebar />
        <Chat />

      </div>

      {/* Chat */}


    </div>
  );
}

export default App;
