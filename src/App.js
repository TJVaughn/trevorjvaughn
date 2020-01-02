import React from 'react';
import './App.css';
import './Portfolio.css'
import Card from './Card'

function App() {
  return (
    <div className="App">
      {/* Primary content in hierarchy */}
      {/* Largest font */}
      {/* Most contrast */}
      <div>
        <h1 className="Site-title">TrevorJVaughn</h1>
      </div>
      <Card />
    </div>
  );
}

export default App;
