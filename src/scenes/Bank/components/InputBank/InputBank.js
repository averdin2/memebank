import React, { Component } from 'react';

// Nested Components
import FieldInputBank from './components/FieldInputBank/FieldInputBank';
import SubmitInputBank from './components/SubmitInputBank/SubmitInputBank';

// Styles
import './InputBank.css';

export default class InputBank extends Component {
  constructor (props) {
    super(props);

    // State of FieldInputBank's value
    this.state = { input: '' };
  }

  // When text field input changes, update state
  handleInputChange = (e) => {
    this.setState({ input: e.target.value });
  }

  // Add card on click of submit button
  handleSubmit = () => {
    this.props.addCard(this.state.input);
    this.setState({ input: '' });
  }

  // Add card when you press enter
  handleKeySubmit = (event) => {
    if (event.key === 'Enter') {
      this.handleSubmit();
    }
  }

  render () {

    // Properties of text field component
    const fieldProps = {
      value: this.state.input,
      onChange: this.handleInputChange,
      onKeyPress: this.handleKeySubmit,
    };

    // Properties of button component
    const buttonProps = {
      onClick: this.handleSubmit,
    };

    // Pass fieldProps down to Inputbank
    const field = <FieldInputBank {...fieldProps} />;
    const button = <SubmitInputBank {...buttonProps} />;

    return <div className='InputBank'>{field}{button}</div>;
  }
}
