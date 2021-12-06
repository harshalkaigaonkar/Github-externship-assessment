import React, { useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Recipe from './components/Recipe/Recipe';

const App = () => {
  const [showRecipe, setShowRecipe] = useState(false)
  return (
    <>
      {showRecipe ? <Recipe setShowRecipe={setShowRecipe} /> : <Home setShowRecipe={setShowRecipe} />}
    </>
  );
}

export default App;
