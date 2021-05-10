// == Import npm
import React from 'react';

// == Import
import Counter from '../Counter';
import Form from '../Form';
import Tasks from '../Tasks';
import './styles.scss';

import data from '../../data/tasks';
// == Composant
const App = () => (
  <div className="app">
    <Form
      inputText="texte en cours de saisi"
      onInputChange={(textSaisi) => {
        console.log(`${textSaisi}`);
      }}
      onFormSubmit={(evt) => {
        console.log('le user à fait entré');
      }}
    />
    <Counter total={3} />
    <Tasks
      list={data}
      onTodoCheck={(todo) => {
        console.log(todo);
      }}
    />

  </div>
);

// == Export
export default App;
