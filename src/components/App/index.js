// == Import npm
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

// == Import
import Counter from '../Counter';
import Form from '../Form';
import Tasks from '../Tasks';
import './styles.scss';

import data from '../../data/tasks';

class TodoApp extends React.Component {
  state = {
    list: data,
    inputText: '',
  };

  changeInputText = (textSaisi) => {
    this.setState({
      inputText: textSaisi,
    });
  }

  addTodo = () => {
    const { inputText, list } = this.state;
    const newTodo = {
      id: uuidv4(),
      label: inputText,
      done: false,
    };

    const newList = [newTodo, ...list];
    this.setState({
      list: newList,
      inputText: '',
    });
  }

  handleTodoCheck = (todo) => {
    console.log(todo);
    const { list } = this.state;
    const newList = list.map((todoObject) => {
      if (todoObject.id === todo.id) {
        const newObject = {
          ...todoObject,
          done: !todoObject.done,
        };

        return newObject;
      }

      return todoObject;
    });
    this.setState({
      list: newList,
    });
  }

  getTodosSorted = () => {
    const { list } = this.state;

    const favAndNotDone = list.filter((todoObject) => !todoObject.done && todoObject.fav);
    const notDone = list.filter((todoObject) => !todoObject.done && !todoObject.fav);
    const favAndDone = list.filter((todoObject) => todoObject.done && todoObject.fav);
    const done = list.filter((todoObject) => todoObject.done && !todoObject.fav);

    return [...favAndNotDone, ...notDone, ...favAndDone, ...done];
  }

  handleTodoRemove = (todo) => {
    const { list } = this.state;

    const newList = list.filter((todoObject) => todoObject.id !== todo.id);

    this.setState({ list: newList });
  }

  handleTodoFav = (todo) => {
    const { list } = this.state;
    const newList = list.map((todoObject) => {
      if (todoObject.id === todo.id) {
        return {
          ...todoObject,
          fav: !todoObject.fav,
        };
      }
      return todoObject;
    });
    this.setState({
      list: newList,
    });
  }

  render() {
    const { list, inputText } = this.state;
    // Je stocke dans cette variable la longueur des todos qui ne sont !done
    const notDoneTodosCount = list.filter((todo) => !todo.done).length;
    return (
      <div className="app">
        <Form
          inputText={inputText}
          onInputChange={this.changeInputText}
          onFormSubmit={this.addTodo}
        />
        <Counter total={notDoneTodosCount} />
        <Tasks
          list={this.getTodosSorted()}
          onTodoCheck={this.handleTodoCheck}
          onTodoRemove={this.handleTodoRemove}
          onTodoFav={this.handleTodoFav}
        />
      </div>
    );
  }
}

// == Export
export default TodoApp;
