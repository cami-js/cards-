import React, { useContext } from 'react';
import './App.css';
import Card from './components/Card';
import { CardContextProvider } from './context/cardContext';

function App() {

  return (
    <CardContextProvider>
      <Card />
    </CardContextProvider>
  );
}

export default App;