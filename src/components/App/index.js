// == Import npm
import React from 'react';

// == Import
import Counter from '../Counter';
import Form from '../Form';
import Tasks from '../Tasks';
import './styles.scss';

import data from '../../data/tasks';

class TodoApp extends React.Component {
  state = {
    list: data,
    inputText: 'je suis une todo en cours de',
  }

  render() {
    const { list, inputText } = this.state;
    const notDoneTodosCount = list.filter((todo) => !todo.done).length;

    return (
      <div className="app">
        <Form
          inputText={inputText}
          onInputChange={(textSaisi) => {
            console.log(`${textSaisi}`);
          }}
          onFormSubmit={() => {
            console.log('le user à fait entré');
          }}
        />
        <Counter total={notDoneTodosCount} />
        <Tasks
          list={list}
          onTodoCheck={(todo) => {
            console.log(todo);
          }}
        />

      </div>
    );
  }
}

// == Export
export default TodoApp;
