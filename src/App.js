import React from 'react';
import Cards from './components/CardsList'
import './App.css';

function App() {
  return (
    <section className="main">
      <h2 className="main__title">List of studies</h2> 
      <Cards/>
    </section>
  );
}

export default App;
