import React from 'react';
import './App.css';

/* Componentes */
import Layout from './components/layout';
/* Modulos */
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Layout />
      </div>
    </Router>
  );
}

export default App;
