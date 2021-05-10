import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Form = ({ inputText, onInputChange, onFormSubmit }) => (
  <form onSubmit={(evt) => {
    evt.preventDefault();
    onFormSubmit();
  }}
  >
    <input
      className="todo-input"
      type="text"
      placeholder="Saisir une tâche"
      value={inputText}
      onChange={(evt) => {
        const textSaisi = evt.target.value;
        onInputChange(textSaisi);
      }}
    />
  </form>
);

Form.propTypes = {
  inputText: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

export default Form;
