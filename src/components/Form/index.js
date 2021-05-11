import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class Form extends React.Component {
  monInput = React.createRef();

  componentDidMount() {
    this.monInput.current.focus();
  }

  render() {
    const { onFormSubmit, onInputChange, inputText } = this.props;
    return (
      <form onSubmit={(evt) => {
        evt.preventDefault();
        onFormSubmit();
      }}
      >
        <input
          ref={this.monInput}
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
  }
}

Form.propTypes = {
  inputText: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

export default Form;
