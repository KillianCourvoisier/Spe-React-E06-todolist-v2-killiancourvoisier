// == Import npm
import React from 'react';

// == Import
import Counter from '../Counter';
import Form from '../Form';
import Tasks from '../Tasks';
import './styles.scss';

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
