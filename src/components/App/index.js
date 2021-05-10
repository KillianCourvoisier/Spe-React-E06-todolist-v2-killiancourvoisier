// == Import npm
import React from 'react';

// == Import
import './styles.css';
import Counter from '../Counter';
import Form from '../Form';
import Tasks from '../Tasks';

// == Composant
const App = () => (
  <div className="app">
    <Form />
    <Counter />
    <Tasks />

  </div>
);

// == Export
export default App;
