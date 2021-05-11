import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Tasks = ({ list, onTodoCheck, onTodoRemove }) => (

  <ul className="todo-list">
    {
      list.map((todoObject) => (
        <li key={todoObject.id} className={todoObject.done ? 'todo todo--done' : 'todo'}>
          <input
            checked={todoObject.done}
            className="todo--checkbox"
            type="checkbox"
            onChange={() => {
              onTodoCheck(todoObject);
            }}
          />
          <span className="todo--text">{todoObject.label}</span>
          <button
            type="button"
            className="todo--remove"
            onClick={() => {
              onTodoRemove(todoObject);
            }}
          >
            X
          </button>
        </li>
      ))
    }

  </ul>

);

Tasks.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  })).isRequired,
  onTodoCheck: PropTypes.func.isRequired,
  onTodoRemove: PropTypes.func.isRequired,
};

export default Tasks;
