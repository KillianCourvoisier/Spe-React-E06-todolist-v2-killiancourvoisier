import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Form = () => (
  <form>
    <input
      className="todo-input"
      type="text"
      placeholder="Saisir une tâche"
    />
  </form>
);

export default Form;
