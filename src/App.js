import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Header from './Header';
import './App.css';





function App() {
  const [colors, setColors] = useState(['red', 'blue', 'green']);

  const newColor = (newColor) => {
    setColors(colors => [...colors, newColor]);
  }
  
  
  return (
    <div className="App">
      <Header newColor={newColor}/>
      <BrowserRouter>
        <Routes colors={colors}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
